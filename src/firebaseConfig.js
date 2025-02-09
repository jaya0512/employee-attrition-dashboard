// Import required functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth  } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN5IZsaH6yJtuzCJV4zWCQXeDuD3LPQ0g",
  authDomain: "employee-attriction.firebaseapp.com",
  projectId: "employee-attriction",
  storageBucket: "employee-attriction.firebasestorage.app",
  messagingSenderId: "593108797765",
  appId: "1:593108797765:web:fecccfc65e8186608a562c",
  measurementId: "G-K7KGS38G78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);  // Initialize Firestore
const auth = getAuth(app);  // Initialize Authentication

export { app, db, analytics, auth };
