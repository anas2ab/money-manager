import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC81w5SZv3l8fu7N4iJ7-M7LIqlj53A4t8",
    authDomain: "moneymanager-b1a3e.firebaseapp.com",
    projectId: "moneymanager-b1a3e",
    storageBucket: "moneymanager-b1a3e.appspot.com",
    messagingSenderId: "311052517595",
    appId: "1:311052517595:web:d9064eeedb067a83de8cfe"
  };

  // init firebase

  firebase.initializeApp(firebaseConfig);

  // init service
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  // timestamp
  const timestamp = firebase.firestore.Timestamp;

  export { projectFirestore, projectAuth, timestamp };