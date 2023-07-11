import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCql3NQqUJYXBLoPSJkjPCobryf3zSusQo",
  authDomain: "assignment-81d1e.firebaseapp.com",
  projectId: "assignment-81d1e",
  storageBucket: "assignment-81d1e.appspot.com",
  messagingSenderId: "270488372717",
  appId: "1:270488372717:web:64c2ab796fc00d687c93e4",
  measurementId: "G-BLPVMC0HX6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
