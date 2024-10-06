// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUjFXxhiSPl8Y9Yp-MVHN-eHMD6srFwyI",
    authDomain: "hotel-binary-int.firebaseapp.com",
    projectId: "hotel-binary-int",
    storageBucket: "hotel-binary-int.appspot.com",
    messagingSenderId: "864696270414",
    appId: "1:864696270414:web:21227dd9b609b491be0d1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;