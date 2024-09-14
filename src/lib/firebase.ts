import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxvaYsAG5ELoHPGlv9_ubZ-_W-KyxTKME",
  authDomain: "hiyokoatama-pra.firebaseapp.com",
  projectId: "hiyokoatama-pra",
  storageBucket: "hiyokoatama-pra.appspot.com",
  messagingSenderId: "1013953720810",
  appId: "1:1013953720810:web:0dc441ba4b7388f3078293",
  measurementId: "G-F5PRG5WHMR",
};

if (!getApps()?.length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();