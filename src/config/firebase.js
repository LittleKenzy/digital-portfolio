// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/setup#create-firebase-project-and-register-app
const firebaseConfig = {
  apiKey: "AIzaSyAwXRJz181drDYBSNajR3WpHQD_-MhzaA4",
  authDomain: "digital-portfolio-fe6e2.firebaseapp.com",
  projectId: "digital-portfolio-fe6e2",
  storageBucket: "digital-portfolio-fe6e2.firebasestorage.app",
  messagingSenderId: "110352885062",
  appId: "1:110352885062:web:09d905749c7aa29c0fb147",
  // measurementId: "G-B3B0VTGR0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);
import { getFirestore } from "firebase/firestore";
export const db = getFirestore(app);

// Auth Providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
