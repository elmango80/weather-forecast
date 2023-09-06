import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWQKUCVCzRVwZxtSvGUDWGfnPCqaAfkUQ",
  authDomain: "weather-forecast-8c8c8.firebaseapp.com",
  projectId: "weather-forecast-8c8c8",
  storageBucket: "weather-forecast-8c8c8.appspot.com",
  messagingSenderId: "263731058712",
  appId: "1:263731058712:web:0ea77a34fa4c5f31130b6d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { db, firebase, githubAuthProvider, googleAuthProvider };
