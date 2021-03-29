import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBycbV0-4Ncvec2PB-r5u7-CfcL02v7QfM",
    authDomain: "react-app-courses-10fb9.firebaseapp.com",
    projectId: "react-app-courses-10fb9",
    storageBucket: "react-app-courses-10fb9.appspot.com",
    messagingSenderId: "452559302710",
    appId: "1:452559302710:web:03e7b58fd601e45a6de897"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthPrivider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthPrivider,
    firebase
}
