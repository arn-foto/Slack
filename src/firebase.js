import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD-UqoEst9kIwYt3q8RtVsrhsN8QMjZvqU",
	authDomain: "slack-clone-14ee8.firebaseapp.com",
	projectId: "slack-clone-14ee8",
	storageBucket: "slack-clone-14ee8.appspot.com",
	messagingSenderId: "1017655478059",
	appId: "1:1017655478059:web:3ed7aa191c6cf070d5e76e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
