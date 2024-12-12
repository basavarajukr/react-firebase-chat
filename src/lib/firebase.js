import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c72a0.firebaseapp.com",
  projectId: "reactchat-c72a0",
  storageBucket: "reactchat-c72a0.firebasestorage.app",
  messagingSenderId: "425268387675",
  appId: "1:425268387675:web:10f5b3740ffdcdbc04847e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
