import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUORSDm0TqyE4DAdqNf8Mo-54wZIlw3No",
  authDomain: "chatapplication-c0c9f.firebaseapp.com",
  projectId: "chatapplication-c0c9f",
  storageBucket: "chatapplication-c0c9f.appspot.com",
  messagingSenderId: "277662271903",
  appId: "1:277662271903:web:0b4a2b8718b1796c8115aa",
  measurementId: "G-LKCPZQBX5K"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
