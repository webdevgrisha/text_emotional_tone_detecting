// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfsAksER3gs8DxqzNkFwNrgifsZ-30Dbc",
    authDomain: "emotional-tone-detector.firebaseapp.com",
    projectId: "emotional-tone-detector",
    storageBucket: "emotional-tone-detector.firebasestorage.app",
    messagingSenderId: "277399720530",
    appId: "1:277399720530:web:0b740af4a890dcdbba058b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const functions = getFunctions(app);

export {functions}