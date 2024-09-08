importScripts("https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.3.0/firebase-messaging.js");

// Firebaseの構成を設定します
const firebaseConfig = {
  apiKey: "AIzaSyDxvaYsAG5ELoHPGlv9_ubZ-_W-KyxTKME",
  authDomain: "hiyokoatama-pra.firebaseapp.com",
  projectId: "hiyokoatama-pra",
  storageBucket: "hiyokoatama-pra.appspot.com",
  messagingSenderId: "1013953720810",
  appId: "1:1013953720810:web:0dc441ba4b7388f3078293",
  measurementId: "G-F5PRG5WHMR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// 通知を受けとると push イベントが呼び出される。
self.addEventListener('push', function (event) {

  console.log("event:push")
  let messageTitle = "MESSAGETITLE"
  let messageBody = "MESSAGEBODY"
  let messageTag = "MESSAGETAG"

  const notificationPromise = self.registration.showNotification(
    messageTitle,
    {
      body: messageBody,
      tag: messageTag
    });

  event.waitUntil(notificationPromise);

}, false)

// WEBアプリがバックグラウンドの場合にはsetBackGroundMessageHandlerが呼び出される。
messaging.setBackgroundMessageHandler(function (payload) {

  console.log("backgroundMessage")

  let messageTitle = "MESSAGETITLE"
  let messageBody = "MESSAGEBODY"

  return self.registration.showNotification(
    messageTitle,
    {
      body: messageBody,
      tag: messageTag
    });
});