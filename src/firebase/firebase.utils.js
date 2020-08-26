/*jshint esversion: 10 */

/** Only import the utilities that you need because
 * they're quite heavy and would ony drag out app
 */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBZtd-ZMdS9cJuXHwQitRC3pYcDYgPRO3Q",
	authDomain: "crwn-clothn-db.firebaseapp.com",
	databaseURL: "https://crwn-clothn-db.firebaseio.com",
	projectId: "crwn-clothn-db",
	storageBucket: "crwn-clothn-db.appspot.com",
	messagingSenderId: "73245815817",
	appId: "1:73245815817:web:5a93a24ec0f8eeaa6b74d8",
	measurementId: "G-EPERGLD6F1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
