import firebase from 'firebase'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5H4sotbL14M8U0JBd8ZZchCXIQ4LEk7c",
    authDomain: "clone-54d7f.firebaseapp.com",
    projectId: "clone-54d7f",
    storageBucket: "clone-54d7f.appspot.com",
    messagingSenderId: "1917287312",
    appId: "1:1917287312:web:5f249064444af921885115",
    measurementId: "G-7FF7KDSYW5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};