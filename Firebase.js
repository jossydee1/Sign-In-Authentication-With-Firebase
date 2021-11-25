// Import the functions you need from the SDKs you need
import firebase from "firebase";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAwQm64EbSowRbUfKIYjycdJKH-9hMp-Qk",
	authDomain: "react-native-user-login.firebaseapp.com",
	projectId: "react-native-user-login",
	storageBucket: "react-native-user-login.appspot.com",
	messagingSenderId: "824891777924",
	appId: "1:824891777924:web:e006ae72c3ac4b630ab3d1",
	measurementId: "G-0V31J1ZKD9",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const provider1 = new firebase.auth.FacebookAuthProvider();

export { auth, provider, provider1 };

// const analytics = getAnalytics(app);
