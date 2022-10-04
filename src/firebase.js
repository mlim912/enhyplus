import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhIDLp73cdrQh8LPZFxBgkC1--fz7rto0",
    authDomain: "enhyplus.firebaseapp.com",
    projectId: "enhyplus",
    storageBucket: "enhyplus.appspot.com",
    messagingSenderId: "1088563496899",
    appId: "1:1088563496899:web:a4e6f995f4ad9940ec9f76",
    measurementId: "G-QL6BW33Y4C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
