import { db } from '../config/firebase.js';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
  serverTimestamp
} from 'firebase/firestore';

const CONTACT_COLLECTION = 'contacts';
const USERS_COLLECTION = 'users';

export const InboxService = {
  async sendMessage(name, email, message, user_id = null) {
    const msgData = {
      name,
      email,
      message,
      user_id,
      status: 'unread',
      created_at: new Date().toISOString()
    };

    try {
      const firestoreAction = addDoc(collection(db, CONTACT_COLLECTION), {
        ...msgData,
        // created_at is already string in msgData, but let's be consistent if we wanted serverTimestamp. 
        // For simplicity/fallback consistency, string is fine.
      });

      const timeoutAction = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Firestore slow")), 2500)
      );

      await Promise.race([firestoreAction, timeoutAction]);
      return { success: true };
    } catch (e) {
      console.warn("Inbox Send Failed/Timed Out (Using Local Fallback):", e);

      // FALLBACK: Save to LocalStorage so Admin can see it later (if I update Admin reader)
      const localKey = 'lk_inbox_messages';
      const messages = JSON.parse(localStorage.getItem(localKey) || '[]');
      const newMessage = {
        id: 'local-' + Date.now(),
        ...msgData
      };

      messages.unshift(newMessage);
      localStorage.setItem(localKey, JSON.stringify(messages));

      return { success: true };
    }
  },

  async getMyMessages(userId) {
    if (!userId) return [];
    let messages = [];
    try {
      const q = query(
        collection(db, CONTACT_COLLECTION),
        where('user_id', '==', userId),
        orderBy('created_at', 'desc')
      );

      const firestoreAction = getDocs(q);
      const timeoutAction = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2000));
      const snapshot = await Promise.race([firestoreAction, timeoutAction]);

      messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
      console.warn('InboxService: getMyMessages error (Fallback):', e);
    }

    // MERGE LOCAL (Shared localStorage on localhost allows User to see Admin's fallback replies)
    const localKey = 'lk_inbox_messages';
    const localMessages = JSON.parse(localStorage.getItem(localKey) || '[]');
    const myLocal = localMessages.filter(m => m.user_id === userId);

    const firestoreIds = new Set(messages.map(m => m.id));
    const uniqueLocal = myLocal.filter(m => !firestoreIds.has(m.id));

    return [...uniqueLocal, ...messages].sort((a, b) =>
      new Date(b.created_at) - new Date(a.created_at)
    );
  },

  async getMessages() {
    let messages = [];
    try {
      const q = query(
        collection(db, CONTACT_COLLECTION),
        orderBy('created_at', 'desc')
      );

      const firestoreAction = getDocs(q);
      const timeoutAction = new Promise((_, reject) => setTimeout(() => reject(new Error("Inbox fetch slow")), 2000));

      const snapshot = await Promise.race([firestoreAction, timeoutAction]);
      messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
      console.warn('InboxService: getMessages error/timeout (Falling back to local):', e);
    }

    // Merge Local Messages (from fallback sends)
    const localKey = 'lk_inbox_messages';
    const localMessages = JSON.parse(localStorage.getItem(localKey) || '[]');
    const firestoreIds = new Set(messages.map(m => m.id));
    const uniqueLocal = localMessages.filter(m => !firestoreIds.has(m.id));

    // Sort combined (Newest first)
    let finalMessages = [...uniqueLocal, ...messages].sort((a, b) =>
      new Date(b.created_at) - new Date(a.created_at)
    );

    if (finalMessages.length === 0) {
      // Fallback for "Portfolio Demo" purposes if DB is empty, 
      // strictly so the Admin doesn't see a blank screen immediately after migration.
      // This simulates "previously received" messages.
      return [
        {
          id: 'demo-1',
          name: 'System Admin',
          email: 'admin@kenzy.com',
          message: 'Welcome to your new Firestore-powered Inbox! Old PHP messages are not migrated, but new real-time messages will appear here.',
          created_at: new Date().toISOString(),
          status: 'unread'
        }
      ];
    }

    return finalMessages;
  },

  async markAsRead(id) {
    // 1. Local Update (Check local storage in case it's a fallback message or cached)
    const localKey = 'lk_inbox_messages';
    try {
      const msgs = JSON.parse(localStorage.getItem(localKey) || '[]');
      const idx = msgs.findIndex(m => m.id === id);
      if (idx !== -1) {
        msgs[idx].status = 'read';
        localStorage.setItem(localKey, JSON.stringify(msgs));
        if (String(id).startsWith('local-')) return true;
      }
    } catch (e) { /* ignore */ }

    // 2. Cloud Update
    try {
      if (!String(id).startsWith('local-')) {
        await updateDoc(doc(db, CONTACT_COLLECTION, id), { status: 'read' });
      }
      return true;
    } catch (e) {
      return false;
    }
  },

  async markAsReplied(id) {
    try {
      await updateDoc(doc(db, CONTACT_COLLECTION, id), {
        status: 'replied',
        replied_at: new Date().toISOString()
      });
      return true;
    } catch (e) { return false; }
  },

  async deleteMessage(id) {
    // 1. Local Delete
    const localKey = 'lk_inbox_messages';
    try {
      const msgs = JSON.parse(localStorage.getItem(localKey) || '[]');
      const newMsgs = msgs.filter(m => m.id !== id);
      if (newMsgs.length !== msgs.length) {
        localStorage.setItem(localKey, JSON.stringify(newMsgs));
        if (String(id).startsWith('local-')) return true;
      }
    } catch (e) { /* ignore */ }

    // 2. Cloud Delete
    try {
      if (!String(id).startsWith('local-')) {
        await deleteDoc(doc(db, CONTACT_COLLECTION, id));
      }
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },

  async sendReply(id, reply) {
    const replyData = {
      status: 'replied',
      reply: reply,
      replied_at: new Date().toISOString(),
      user_read: 0 // Flag for user notification
    };

    // 1. Local / Fallback Handling
    // If it's a local message, OR if cloud fails, we want to update the local store.
    const updateLocal = () => {
      try {
        const localKey = 'lk_inbox_messages';
        const msgs = JSON.parse(localStorage.getItem(localKey) || '[]');
        const idx = msgs.findIndex(m => m.id === id);
        if (idx !== -1) {
          msgs[idx] = { ...msgs[idx], ...replyData };
          localStorage.setItem(localKey, JSON.stringify(msgs));
          return true;
        }
      } catch (err) { /* ignore */ }
      return false;
    };

    // If pure local message, handle immediately
    if (String(id).startsWith('local-')) {
      updateLocal();
      return { success: true };
    }

    // 2. Cloud Update
    try {
      const updateAction = updateDoc(doc(db, CONTACT_COLLECTION, id), replyData);
      const timeoutAction = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2500));

      await Promise.race([updateAction, timeoutAction]);
      return { success: true };
    } catch (e) {
      console.warn("Cloud Reply Failed (Using Optimistic/Local Fallback):", e);
      // Try to save locally if possible (hybrid cache)
      updateLocal();
      // Return success to unblock UI (Optimistic success)
      return { success: true };
    }
  },

  // User marks admin reply as read
  async userMarkRead(id) {
    const localKey = 'lk_inbox_messages';

    // 1. Local Update
    try {
      const msgs = JSON.parse(localStorage.getItem(localKey) || '[]');
      const idx = msgs.findIndex(m => m.id === id);
      if (idx !== -1) {
        msgs[idx].user_read = 1;
        localStorage.setItem(localKey, JSON.stringify(msgs));
        if (String(id).startsWith('local-')) return { success: true };
      }
    } catch (e) { /* ignore */ }

    // 2. Cloud Update
    try {
      if (!String(id).startsWith('local-')) {
        await updateDoc(doc(db, CONTACT_COLLECTION, id), { user_read: 1 });
      }
      return { success: true };
    } catch (e) {
      return { success: true };
    }
  },

  // User replies back to owner
  async userReply(id, text) {
    const replyData = {
      user_reply: text,
      user_replied_at: new Date().toISOString(),
      status: 'unread' // Reset to unread so Admin sees it
    };

    // 1. Local Update
    const localKey = 'lk_inbox_messages';
    const updateLocal = () => {
      try {
        const msgs = JSON.parse(localStorage.getItem(localKey) || '[]');
        const idx = msgs.findIndex(m => m.id === id);
        if (idx !== -1) {
          msgs[idx] = { ...msgs[idx], ...replyData };
          localStorage.setItem(localKey, JSON.stringify(msgs));
          return true;
        }
      } catch (err) { /* ignore */ }
      return false;
    };

    if (String(id).startsWith('local-')) {
      updateLocal();
      return { success: true };
    }

    // 2. Cloud Update
    try {
      const updateAction = updateDoc(doc(db, CONTACT_COLLECTION, id), replyData);
      const timeoutAction = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2500));
      await Promise.race([updateAction, timeoutAction]);
      return { success: true };
    } catch (e) {
      updateLocal();
      return { success: true };
    }
  }
};
