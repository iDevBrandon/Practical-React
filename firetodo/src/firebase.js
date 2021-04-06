// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDzYSRoFaQ50UASUyKZ9AMSl4fqOBBmJ9c",
//   authDomain: "todo-app-cp-8dd17.firebaseapp.com",
//   projectId: "todo-app-cp-8dd17",
//   storageBucket: "todo-app-cp-8dd17.appspot.com",
//   messagingSenderId: "308620576123",
//   appId: "1:308620576123:web:0c3745fffa66a96619e9de",
//   measurementId: "G-KFLTGNXCJS",
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDzYSRoFaQ50UASUyKZ9AMSl4fqOBBmJ9c",
  authDomain: "todo-app-cp-8dd17.firebaseapp.com",
  projectId: "todo-app-cp-8dd17",
  storageBucket: "todo-app-cp-8dd17.appspot.com",
  messagingSenderId: "308620576123",
  appId: "1:308620576123:web:0c3745fffa66a96619e9de",
  measurementId: "G-KFLTGNXCJS",
});

const db = firebaseApp.firestore();

export default db;
