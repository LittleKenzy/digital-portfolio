import { auth, db, googleProvider, githubProvider } from '../config/firebase.js';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const SESSION_KEY = 'user_session';

export const AuthService = {
  // Helper to get Role
  async _getUserRole(uid, email) {
    // Hardcoded Owner Admin Safety Net
    if (email === 'owner@gmail.com') return 'admin';

    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data().role || 'user';
      }
    } catch (e) { console.error('Role fetch failed', e); }
    return 'user';
  },

  async register(username, email, password) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      await updateProfile(user, { displayName: username });

      // Create User Doc in Firestore
      const role = (email === 'owner@gmail.com') ? 'admin' : 'user';
      await setDoc(doc(db, 'users', user.uid), {
        username,
        email,
        role,
        created_at: new Date().toISOString()
      });

      return this._createSession(user, role);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async login(email, password) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      const role = await this._getUserRole(user.uid, user.email);
      return this._createSession(user, role);
    } catch (error) {
      throw new Error("Invalid Email or Password");
    }
  },

  async loginWithGoogle() {
    return this._socialLogin(googleProvider);
  },

  async loginWithGitHub() {
    return this._socialLogin(githubProvider);
  },

  async _socialLogin(provider) {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check/Create Doc
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      let role = 'user';

      if (!docSnap.exists()) {
        role = (user.email === 'owner@gmail.com') ? 'admin' : 'user';
        await setDoc(docRef, {
          username: user.displayName,
          email: user.email,
          role: role,
          created_at: new Date().toISOString()
        });
      } else {
        role = docSnap.data().role || 'user';
        if (user.email === 'owner@gmail.com') role = 'admin';
      }

      return this._createSession(user, role);
    } catch (e) { throw new Error(e.message); }
  },

  async _createSession(user, role) {
    const session = {
      token: await user.getIdToken(),
      user: {
        id: user.uid,
        username: user.displayName,
        email: user.email,
        avatar: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || 'User')}&background=random`,
        role: role
      }
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  },

  logout() {
    localStorage.removeItem(SESSION_KEY);
    auth.signOut(); // Ensure Firebase session is cleared too
    window.location.hash = '/login';
  },

  getUser() {
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY));
      return session ? session.user : null;
    } catch (e) { return null; }
  },

  isAuthenticated() {
    return !!localStorage.getItem(SESSION_KEY);
  }
};
