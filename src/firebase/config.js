import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

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
  
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };

