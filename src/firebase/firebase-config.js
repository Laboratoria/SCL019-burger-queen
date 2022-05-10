import  {initializeApp}  from "firebase/app";
import  {getFirestore}  from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyArTVKiWo4M23g1cmVpzt7M9aFOrOQAT50",
    authDomain: "burgerqueen-app.firebaseapp.com",
    projectId: "burgerqueen-app",
    storageBucket: "burgerqueen-app.appspot.com",
    messagingSenderId: "1053056895776",
    appId: "1:1053056895776:web:29d63cc9541343969d6545",
    measurementId: "G-CE8EV6RYB7"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);