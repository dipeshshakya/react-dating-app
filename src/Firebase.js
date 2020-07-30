import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDZ0r_MziM_L8TL1kEKe2OIZ6lcKeESML8",
  authDomain: "tinder-clone-a8e50.firebaseapp.com",
  databaseURL: "https://tinder-clone-a8e50.firebaseio.com",
  projectId: "tinder-clone-a8e50",
  storageBucket: "tinder-clone-a8e50.appspot.com",
  messagingSenderId: "615501397932",
  appId: "1:615501397932:web:f2532c028d06954ac68409",
};
// const  = firebase.initializeApp(firebaseConfig);
var firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
