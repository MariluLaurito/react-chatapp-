// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYzWyzZZWZ3NvAcB3yC4kgSvSNE9VpCFE",
  authDomain: "chat-app-cf87c.firebaseapp.com",
  projectId: "chat-app-cf87c",
  storageBucket: "chat-app-cf87c.appspot.com",
  messagingSenderId: "169791422631",
  appId: "1:169791422631:web:a1d7aa2024189c263adb82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);