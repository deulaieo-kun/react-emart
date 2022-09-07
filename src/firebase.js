import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCB8PzfQ_DFPJdx7kZcPU7EntIVtgOp4XQ",
    authDomain: "react-emart-b2296.firebaseapp.com",
    projectId: "react-emart-b2296",
    storageBucket: "react-emart-b2296.appspot.com",
    messagingSenderId: "956310539206",
    appId: "1:956310539206:web:c8d1a8e308a012ec1300c7"
  };

//Use this to initialize the Firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

//Use for db
const db = firebaseapp.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()

export { db, auth, googleProvider, facebookProvider }


