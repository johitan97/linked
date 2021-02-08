import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQUDkhrC87RWhNBT2KJlunLdguy_CbqME",
    authDomain: "linked-ce382.firebaseapp.com",
    projectId: "linked-ce382",
    storageBucket: "linked-ce382.appspot.com",
    messagingSenderId: "593934050074",
    appId: "1:593934050074:web:2964be719db4b144c9c2a3",
    measurementId: "G-PPBFPB3G5X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export { db, auth };