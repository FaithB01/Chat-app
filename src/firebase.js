import firebase from "firebase"

  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBufvD70KPUsZerEVGOPqj5TRsK7Dx-gwo",
    authDomain: "chat-3f17a.firebaseapp.com",
    projectId: "chat-3f17a",
    storageBucket: "chat-3f17a.appspot.com",
    messagingSenderId: "783686793394",
    appId: "1:783686793394:web:cda4bc4c2c94e6946931ab",
    measurementId: "G-28161RBP9F"
  }

  ) 
  
  const db = firebaseApp.firestore();
  

export default db;
