const firebaseConfig = {
  apiKey: "AIzaSyBFw6iso0ndbPDt1OUyxU9pzy-2Rkq-oXw",
  authDomain: "thachlam-jsi32.firebaseapp.com",
  projectId: "thachlam-jsi32",
  storageBucket: "thachlam-jsi32.firebasestorage.app",
  messagingSenderId: "379073057141",
  appId: "1:379073057141:web:634c694b0867f5c2b9c33c"
};
firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);

const db = firebase.firestore();
console.log("Firebase config loaded");