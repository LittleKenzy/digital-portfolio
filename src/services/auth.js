import { auth, googleProvider, githubProvider } from '../config/firebase.js';
import { signInWithPopup } from 'firebase/auth';

const USERS_KEY = 'lk_users';
const SESSION_KEY = 'user_session';
const API_BASE = '/api';

export const AuthService = {
  // getUsers() removed as we don't expose all users to client in real app

  async register(username, email, password) {
    const res = await fetch(`${API_BASE}/register.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Registration failed');
    }
    return data;
  },

  async login(email, password) {
    const res = await fetch(`${API_BASE}/login.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Login failed');
    }

    // data.user should contain the user info
    const session = {
      token: data.token,
      user: data.user
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  },

  async loginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Map Firebase user to App Session
      const session = {
        token: await user.getIdToken(),
        user: {
          id: user.uid,
          username: user.displayName,
          email: user.email,
          avatar: user.photoURL
        }
      };

      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return session;
    } catch (error) {
      console.error(error);
      throw new Error('Google Login Failed: ' + error.message);
    }
  },

  async loginWithGitHub() {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      const user = result.user;

      // Map Firebase user to App Session
      const session = {
        token: await user.getIdToken(),
        user: {
          id: user.uid,
          username: user.displayName,
          email: user.email,
          avatar: user.photoURL
        }
      };

      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return session;
    } catch (error) {
      console.error(error);
      throw new Error('GitHub Login Failed: ' + error.message);
    }
  },

  logout() {
    localStorage.removeItem(SESSION_KEY);
    window.location.hash = '/login';
  },

  getUser() {
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY));
      return session ? session.user : null;
    } catch (e) {
      return null;
    }
  },

  isAuthenticated() {
    return !!localStorage.getItem(SESSION_KEY);
  }
};
