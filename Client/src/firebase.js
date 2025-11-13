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

// 🔹 Optional helper to get a storage reference for profile images
import { ref } from "firebase/storage";
const getProfileImageRef = (userId) => ref(storage, `profileImages/${userId}`);

// 🔹 Optional helper to handle CORS-friendly upload using Firebase SDK
import { uploadBytes, getDownloadURL } from "firebase/storage";
const uploadProfileImage = async (userId, file) => {
  if (!userId || !file) throw new Error("Missing userId or file");
  const imageRef = getProfileImageRef(userId);
  await uploadBytes(imageRef, file);
  const url = await getDownloadURL(imageRef);
  return url; // Returns downloadable URL
};

export { 
  app, 
  auth, 
  db, 
  storage, 
  loginWithGoogle, 
  logoutUser, 
  getProfileImageRef, 
  uploadProfileImage 
};
