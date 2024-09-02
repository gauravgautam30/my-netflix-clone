// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu3fFqlJJIAxyDx62IedtvsPxJ1wwADo4",
  authDomain: "gg-netflix.firebaseapp.com",
  projectId: "gg-netflix",
  storageBucket: "gg-netflix.appspot.com",
  messagingSenderId: "25518575309",
  appId: "1:25518575309:web:9396e7e8ca572385282384",
  measurementId: "G-EL20BX4GPG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
