
import firebase from 'firebase'
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyChMZJ5MJGJseeu5IWtPMr_vuxKJxno-MM",
  authDomain: "calle139.firebaseapp.com",
  databaseURL: "https://calle139.firebaseio.com",
  projectId: "calle139",
  storageBucket: "calle139.appspot.com",
  messagingSenderId: "1083905177180",
  appId: "1:1083905177180:web:6683c9dd1bb26f958dd899",
  measurementId: "G-WTSBTDF9TB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const db = firebase.firestore();
export default firebase;