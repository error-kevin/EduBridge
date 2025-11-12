// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKvPw7l02pTXAoGF5eB_rVcATqgzKob8c",
  authDomain: "edu-bridge-learn.firebaseapp.com",
  projectId: "edu-bridge-learn",
  storageBucket: "edu-bridge-learn.firebasestorage.app",
  messagingSenderId: "674146680703",
  appId: "1:674146680703:web:514ef4a307e5432955244a",
  measurementId: "G-9GWNLNW99M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
