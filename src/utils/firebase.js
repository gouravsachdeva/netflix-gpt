// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClhFioIvd7VBh3sDe8eIe1BOhy8vSXIgg",
  authDomain: "netflixgpt-d30ce.firebaseapp.com",
  projectId: "netflixgpt-d30ce",
  storageBucket: "netflixgpt-d30ce.appspot.com",
  messagingSenderId: "558556011651",
  appId: "1:558556011651:web:68c1be8db3234fbdf28fb6",
  measurementId: "G-BLRLG56D24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
