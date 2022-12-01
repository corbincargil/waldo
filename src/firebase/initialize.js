import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
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

//leaderboard ref - Classic Waldo
export const mapOneLeaderboardRef = collection(
  db,
  "classic-waldo-leaderboards"
);
//leaderboard ref - Video Game Characters
export const mapTwoLeaderboardRef = collection(
  db,
  "video-game-character-leaderboards"
);

// fetch leaderboards from db
export async function fetchLeaderboards(leaderboardRef) {
  let leaderboards = [];
  await getDocs(leaderboardRef).then((snapshot) => {
    snapshot.docs.forEach((leader) => {
      leaderboards.push({ ...leader.data(), id: leader.id });
    });
  });
  return leaderboards;
}

//add a new score by passing in the leaderboardRef
export async function addNewScore(username, score, leaderboardRef) {
  await addDoc(leaderboardRef, {
    username,
    score,
    timestamp: serverTimestamp(),
  });
}
