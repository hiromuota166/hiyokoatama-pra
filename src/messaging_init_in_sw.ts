import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDxvaYsAG5ELoHPGlv9_ubZ-_W-KyxTKME",
  authDomain: "hiyokoatama-pra.firebaseapp.com",
  projectId: "hiyokoatama-pra",
  storageBucket: "hiyokoatama-pra.appspot.com",
  messagingSenderId: "1013953720810",
  appId: "1:1013953720810:web:0dc441ba4b7388f3078293",
  measurementId: "G-F5PRG5WHMR",
};

export function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey: "BJuvH9DfS1Qm596RuTkMVTgIu6qwSkck2ELjyd1FskTJ9i1pqAZLqdXq19sshBz2LOMjQDRLSoGSuZDCDPIIC8Y",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken:", currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      }).catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
    } else {
      console.log("Unable to get permission to notify.");
    }
  });
}