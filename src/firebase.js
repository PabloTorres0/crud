import firebase from 'firebase/app'
import 'firebase/firestore'
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCEQptZ0PZwcuEtqNV8tFubcrwKnRblrds",
    authDomain: "crud-udemy-react-3.firebaseapp.com",
    projectId: "crud-udemy-react-3",
    storageBucket: "crud-udemy-react-3.appspot.com",
    messagingSenderId: "760204723724",
    appId: "1:760204723724:web:3450ff161bc46fb7ac5029"
  };

  // Initialize Firebase
  // const firebase = initializeApp(firebaseConfig);
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export{firebase}