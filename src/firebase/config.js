import firebase from 'firebase/app';
import 'firebase/storage'; //storage sdk
import 'firebase/firestore'; //firestore sdk

var firebaseConfig = {
    apiKey: "AIzaSyB9rid8ywLJbJgsIbKjF1S7ljFeyae-vQQ",
    authDomain: "gallery-83b95.firebaseapp.com",
    projectId: "gallery-83b95",
    storageBucket: "gallery-83b95.appspot.com",
    messagingSenderId: "148772618139",
    appId: "1:148772618139:web:9d0a207688de7820236b3e"
};
  
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage(); //starts storage service 
const db = firebase.firestore(); //firestore - realtime db service 
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, db , timeStamp};

