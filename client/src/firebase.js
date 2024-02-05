// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-de4ae.firebaseapp.com",
  projectId: "mern-auth-de4ae",
  storageBucket: "mern-auth-de4ae.appspot.com",
  messagingSenderId: "209168393414",
  appId: "1:209168393414:web:bdef70a2e528e3598b23c7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
