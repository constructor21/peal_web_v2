import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDfWsRC1O2_uQzEgYvUuHLHMEiC-jPvHQk",
  authDomain: "peal-web-v2.firebaseapp.com",
  databaseURL: "https://peal-web-v2.firebaseio.com",
  projectId: "peal-web-v2",
  storageBucket: "peal-web-v2.appspot.com",
  messagingSenderId: "382040736163",
  appId: "1:382040736163:web:41fd5e56b2607b10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });  ... taken care of by default now

export default firebase
