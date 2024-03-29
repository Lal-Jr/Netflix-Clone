import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDce9R70pZeGYJqUB_gJBz0K7HHRSn3tjc",
	authDomain: "netflix-clone-f8ec1.firebaseapp.com",
	databaseURL:
		"https://netflix-clone-f8ec1-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "netflix-clone-f8ec1",
	storageBucket: "netflix-clone-f8ec1.appspot.com",
	messagingSenderId: "22435360818",
	appId: "1:22435360818:web:56155abac2dd820597cc2b",
	measurementId: "G-YJD7E1WQ58",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
