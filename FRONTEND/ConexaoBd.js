// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUvOgSRAQ7D0dI1vlrc_Osbi69-ltR0og",
  authDomain: "bancodedadospiiii.firebaseapp.com",
  projectId: "bancodedadospiiii",
  storageBucket: "bancodedadospiiii.appspot.com",
  messagingSenderId: "535010091411",
  appId: "1:535010091411:web:9bcebe42b7c357b5b3c866",
  measurementId: "G-LVZPWV8LQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
