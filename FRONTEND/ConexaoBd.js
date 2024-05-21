// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js';

// Your web app's Firebase configuration
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

export { app };

