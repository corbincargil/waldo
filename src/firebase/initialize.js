import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  snapshot,
  doc,
  addDoc,
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
export const db = getFirestore();

//locations ref
const LocationRef = collection(db, "locations");
//Locations
export function fetchLocations() {
  let locations = [];
  getDocs(LocationRef).then((snapshot) => {
    snapshot.docs.forEach((location) => {
      locations.push({ ...location.data(), id: location.id });
    });
  });
  return locations;
}

//leaderboard ref
const leaderboardRef = collection(db, "leaderboards");
// fetch leaderboards from db
export async function fetchLeaderboards() {
  let leaderboards = [];
  await getDocs(leaderboardRef).then((snapshot) => {
    snapshot.docs.forEach((leader) => {
      leaderboards.push({ ...leader.data(), id: leader.id });
    });
  });
  return leaderboards;
}

export async function addNewScore(username, score) {
  await addDoc(leaderboardRef, {
    username,
    score,
    timestamp: serverTimestamp(),
  });
}
