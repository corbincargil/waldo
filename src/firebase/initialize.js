import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0Hf5YvEpfCEK5mOix3WGJILpLvX13ohA",
  authDomain: "waldo-f765b.firebaseapp.com",
  projectId: "waldo-f765b",
  storageBucket: "waldo-f765b.appspot.com",
  messagingSenderId: "444650208206",
  appId: "1:444650208206:web:f9116bc1781863930f899f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init services
const db = getFirestore();
//locations ref
const colRef = collection(db, "locations");
