// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, GithubAuthProvider, OAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeI8lg5cwGSMOCOC0ee1wj9oZxnG4B8iY",
  authDomain: "delifastdemos.firebaseapp.com",
  projectId: "delifastdemos",
  storageBucket: "delifastdemos.firebasestorage.app",
  messagingSenderId: "131570274014",
  appId: "1:131570274014:web:1f9d9904cb9966b580bc4f",
  measurementId: "G-PEV0B1QDY9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const oauthProvider = new OAuthProvider('microsoft.com');

export { auth, googleProvider, githubProvider, oauthProvider };


