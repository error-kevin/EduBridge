// src/firebase.js

// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKvPw7l02pTXAoGF5eB_rVcATqgzKob8c",
  authDomain: "edu-bridge-learn.firebaseapp.com",
  projectId: "edu-bridge-learn",
  storageBucket: "edu-bridge-learn.appspot.com", // ✅ fixed: should end with .appspot.com
  messagingSenderId: "674146680703",
  appId: "1:674146680703:web:514ef4a307e5432955244a",
  measurementId: "G-9GWNLNW99M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Helper functions for login/logout
const loginWithGoogle = () => signInWithPopup(auth, provider);
const logoutUser = () => signOut(auth);

export { app, auth, db, storage, loginWithGoogle, logoutUser };

