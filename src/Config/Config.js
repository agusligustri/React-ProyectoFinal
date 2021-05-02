/* CONFIGURACION FIREBASE */

import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC4aFH2bEVbkzSJM31IJhFrEy20wcKBa3E",
    authDomain: "reacjs-agusligustri.firebaseapp.com",
    projectId: "reacjs-agusligustri",
    storageBucket: "reacjs-agusligustri.appspot.com",
    messagingSenderId: "503826723112",
    appId: "1:503826723112:web:fbddb91632202b26ba201d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }