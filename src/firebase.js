import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL8SpLj6B4lj5MbQlOPc4fGJeSczkvR70",
  authDomain: "fir-project1-15aed.firebaseapp.com",
  projectId: "fir-project1-15aed",
  storageBucket: "fir-project1-15aed.firebasestorage.app",
  messagingSenderId: "490314682098",
  appId: "1:490314682098:web:cd7f1b2435aa96ccfb8a6b",
  measurementId: "G-33VK8S904W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
