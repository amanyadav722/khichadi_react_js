import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-FjbmDBzKLbY4NMyhYQKrG5fI4Xx-gso",
    authDomain: "reactchat-15bec.firebaseapp.com",
    projectId: "reactchat-15bec",
    storageBucket: "reactchat-15bec.appspot.com",
    messagingSenderId: "653977595654",
    appId: "1:653977595654:web:c1ead51bb6f1af153b3887",
    measurementId: "G-K05F3N8N19"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }