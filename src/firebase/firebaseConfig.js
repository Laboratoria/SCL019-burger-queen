// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWG7vlq9YpYXoVckFNBeBgERJOdN_wSFM",
  authDomain: "scl019-burger-queen-d2d65.firebaseapp.com",
  projectId: "scl019-burger-queen-d2d65",
  storageBucket: "scl019-burger-queen-d2d65.appspot.com",
  messagingSenderId: "895865820047",
  appId: "1:895865820047:web:f9b7902bbcc38fe06a31fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

