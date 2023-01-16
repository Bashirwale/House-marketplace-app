// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS6vTpPrru2lF03GV6c6zQxmL4tPsPv6Q",
  authDomain: "house-marketplace-app-a500f.firebaseapp.com",
  projectId: "house-marketplace-app-a500f",
  storageBucket: "house-marketplace-app-a500f.appspot.com",
  messagingSenderId: "1028172224845",
  appId: "1:1028172224845:web:e5468c1b9828ec4b003f04",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
