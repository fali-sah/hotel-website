const firebaseConfig = {
  apiKey: "AIzaSyADhDBKIJpAJhvmyOeG3c2Mh4dCB_YlIAc",
  authDomain: "hotel-management-ccef2.firebaseapp.com",
  projectId: "hotel-management-ccef2",
  storageBucket: "hotel-management-ccef2.appspot.com",
  messagingSenderId: "769716214421",
  appId: "1:769716214421:web:a1d5d4007f29d3cca3199c"
};

const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
console.log("Connection Established.............");