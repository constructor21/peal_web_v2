import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyD7E8rpYKYH2hHwzEBmzZSLhSxRUR1qqao",
  authDomain: "peal-9d82d.firebaseapp.com",
  databaseURL: "https://peal-9d82d.firebaseio.com",
  projectId: "peal-9d82d",
  storageBucket: "peal-9d82d.appspot.com",
  messagingSenderId: "624902981487",
  appId: "1:624902981487:web:cad385f22f24f8f5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });  ... taken care of by default now

const storage = firebase.storage();

export {
  storage, firebase as default
}
