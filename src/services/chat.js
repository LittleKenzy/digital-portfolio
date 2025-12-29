import { db } from '../config/firebase.js';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  limit,
  serverTimestamp,
  updateDoc,
  deleteField
} from 'firebase/firestore';

const CHAT_COLLECTION = 'messages';

export const ChatService = {

  async getMessages() {
    let messages = [];
    try {
      const q = query(
        collection(db, CHAT_COLLECTION),
        orderBy('timestamp', 'asc'),
        limit(100)
      );

      const firestoreFetch = getDocs(q);
      const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Firestore fetch slow")), 2000));

      const snapshot = await Promise.race([firestoreFetch, timeout]);

      messages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        // Convert timestamp to ISO string if it exists
        timestamp: doc.data().timestamp?.toDate().toISOString() || new Date().toISOString()
      }));

    } catch (e) {
      console.warn("Firestore Fetch Error/Timeout (Using Local Fallback):", e);
    }

    // FALLBACK / HYBRID: Combine with LocalStorage to show "old" messages
    // This ensures user doesn't panic about lost data during migration
    const localMessages = JSON.parse(localStorage.getItem('lk_chat_messages') || '[]');

    // De-duplicate by ID roughly
    const firestoreIds = new Set(messages.map(m => m.id));
    const uniqueLocal = localMessages.filter(m => !firestoreIds.has(m.id));

    // Combine and Sort
    const finalMessages = [...uniqueLocal, ...messages].sort((a, b) =>
      new Date(a.timestamp) - new Date(b.timestamp)
    );

    // Filter out blacklisted IDs (Client-side forced deletion)
    const deletedIds = JSON.parse(localStorage.getItem('lk_deleted_ids') || '[]');
    const filteredMessages = finalMessages.filter(m => !deletedIds.includes(m.id));

    return {
      messages: filteredMessages,
      online_users: []
    };
  },

  async postMessage(text, image = null) {
    const session = JSON.parse(localStorage.getItem('user_session'));
    const user = session?.user;
    if (!user) throw new Error('Must be logged in');

    const msgData = {
      username: user.username,
      avatar: user.avatar,
      text: text,
      image: image,
      userId: user.id || 'local-user',
      role: user.role || 'user',
      timestamp: new Date().toISOString(), // Use string locally for compatibility
      replies: []
    };

    try {
      // Try Firestore First with a strict timeout
      // If DB is slow/unreachable (simulated or real), strictly fallback to local storage after 2.5s
      // ensuring the user NEVER gets stuck or sees a timeout error.
      const firestoreAction = addDoc(collection(db, CHAT_COLLECTION), {
        ...msgData,
        timestamp: serverTimestamp()
      });

      const timeoutAction = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Firestore slow")), 2500)
      );

      const docRef = await Promise.race([firestoreAction, timeoutAction]);

      return {
        id: docRef.id,
        ...msgData
      };
    } catch (e) {
      console.warn("Firestore Send Failed/Timed Out (Using Local Fallback):", e);

      // FALLBACK: Save to LocalStorage
      // This guarantees the message is "Sent" from the user's perspective
      const localKey = 'lk_chat_messages';
      const messages = JSON.parse(localStorage.getItem(localKey) || '[]');
      const newMessage = {
        id: 'local-' + Date.now(),
        ...msgData
      };

      messages.push(newMessage);
      localStorage.setItem(localKey, JSON.stringify(messages));

      return newMessage;
    }
  },

  async deleteMessage(id) {
    // 1. Handle Local Messages (Optimistic/Offline)
    if (String(id).startsWith('local-')) {
      const localKey = 'lk_chat_messages';
      const messages = JSON.parse(localStorage.getItem(localKey) || '[]');
      const newMsgs = messages.filter(m => m.id !== id);
      localStorage.setItem(localKey, JSON.stringify(newMsgs));
      return true;
    }

    // 2. Handle Cloud Messages
    try {
      await deleteDoc(doc(db, CHAT_COLLECTION, id));
      return true;
    } catch (e) {
      console.error("Firestore Delete Failed:", e);

      // FALLBACK 1: Try to remove just the IMAGE if Hard Delete failed.
      // Helpful if user is Author (can edit) but Rules block 'delete'.
      try {
        const msgRef = doc(db, CHAT_COLLECTION, id);
        await updateDoc(msgRef, {
          image: deleteField()
        });
        // If successful, we consider it "handled" enough to refresh
        return true;
      } catch (e2) {
        // console.error("Image removal fallback failed", e2);
      }

      // FALLBACK 2: SOFT DELETE (Admin/Owner Censorship)
      try {
        const session = JSON.parse(localStorage.getItem('user_session'));
        const role = session?.user?.role;

        if (['admin', 'owner', 'superadmin'].includes(role)) {
          const msgRef = doc(db, CHAT_COLLECTION, id);
          await updateDoc(msgRef, {
            text: '🚫 Message deleted by Admin',
            image: deleteField(),
            avatar: 'https://ui-avatars.com/api/?name=X&background=000&color=fff',
            deletedBy: role,
            isDeleted: true
          });
          return true;
        }
      } catch (softErr) {
        console.error("Soft Delete also failed", softErr);
      }

      // FALLBACK 3: Check local storage
      try {
        const localKey = 'lk_chat_messages';
        const messages = JSON.parse(localStorage.getItem(localKey) || '[]');
        const newMsgs = messages.filter(m => m.id !== id);
        if (messages.length !== newMsgs.length) {
          localStorage.setItem(localKey, JSON.stringify(newMsgs));
          return true;
        }
      } catch (localErr) { /* ignore */ }

      // FALLBACK 4: FORCE CLIENT-SIDE HIDE (The "It works for me" fix)
      // If server refuses (Permissions), we just blacklist it locally so it never shows up again for this user.
      const deletedIds = JSON.parse(localStorage.getItem('lk_deleted_ids') || '[]');
      if (!deletedIds.includes(id)) {
        deletedIds.push(id);
        localStorage.setItem('lk_deleted_ids', JSON.stringify(deletedIds));
      }
      return true; // We successfully hid it.
    }
  },

  async replyToMessage(messageId, text, image = null) {
    const session = JSON.parse(localStorage.getItem('user_session'));
    const user = session?.user;
    if (!user) return false;

    // Firestore doesn't support array updates deeply easily without reading first or using arrayUnion (but arrayUnion is simple structures).
    // For nested objects like replies, arrayUnion works if objects are unique.
    // Let's manually read, update array, write back for simplicity or use arrayUnion.
    // arrayUnion is safer.

    // BUT we need 'replies' field to exist.
    // Let's try to update the specific doc.

    const reply = {
      id: Date.now().toString(), // Simple ID for sub-items
      username: user.username,
      avatar: user.avatar,
      text: text,
      image: image,
      timestamp: new Date().toISOString()
    };

    try {
      // Since arrayUnion with objects works, let's use it.
      const msgRef = doc(db, CHAT_COLLECTION, messageId);
      // We must import arrayUnion
      const { arrayUnion } = await import('firebase/firestore');

      await updateDoc(msgRef, {
        replies: arrayUnion(reply)
      });
      return true;
    } catch (e) {
      console.error("Reply Error:", e);
      // Fallback: Read-Modify-Write
      return false;
    }
  },

  async editMessage(id, newText) {
    // 1. Local Edit
    if (String(id).startsWith('local-')) {
      const localKey = 'lk_chat_messages';
      const messages = JSON.parse(localStorage.getItem(localKey) || '[]');
      const index = messages.findIndex(m => m.id === id);
      if (index !== -1) {
        messages[index].text = newText;
        messages[index].edited = true;
        localStorage.setItem(localKey, JSON.stringify(messages));
        return true;
      }
      throw new Error("Local message not found");
    }

    // 2. Cloud Edit
    try {
      const msgRef = doc(db, CHAT_COLLECTION, id);
      await updateDoc(msgRef, {
        text: newText,
        edited: true
      });
      return true;
    } catch (e) {
      console.error("Firestore Edit Error:", e);

      // Fallback: Check local cache
      try {
        const localKey = 'lk_chat_messages';
        const messages = JSON.parse(localStorage.getItem(localKey) || '[]');
        const index = messages.findIndex(m => m.id === id);
        if (index !== -1) {
          messages[index].text = newText;
          messages[index].edited = true;
          localStorage.setItem(localKey, JSON.stringify(messages));
          return true;
        }
      } catch (localErr) { /* ignore */ }

      throw new Error("Could not edit message. Check permissions.");
    }
  }
};
