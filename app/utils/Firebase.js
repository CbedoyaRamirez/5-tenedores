import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEaySiSa37pZCaA0VIBEqTOSPhkXnp4Wg",
  authDomain: "tenedores-9a179.firebaseapp.com",
  databaseURL: "https://tenedores-9a179.firebaseio.com",
  projectId: "tenedores-9a179",
  storageBucket: "tenedores-9a179.appspot.com",
  messagingSenderId: "629878983877",
  appId: "1:629878983877:web:77e148a131ac5acd04b4ac",
  measurementId: "G-WPNMWGJ8VW"
};

export const firebaseapp = firebase.initializeApp(firebaseConfig);
