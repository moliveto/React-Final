// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9TySZCw_aCZtjFvpd9aN6mU9xqC9QTPY",
    authDomain: "react58400.firebaseapp.com",
    projectId: "react58400",
    storageBucket: "react58400.appspot.com",
    messagingSenderId: "1084935836585",
    appId: "1:1084935836585:web:2fb5bf9e9a3630b201aab8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);