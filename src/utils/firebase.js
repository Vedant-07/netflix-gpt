// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACxK43pv47qXzuV4hyLqzYMcilzKmlpE0",
  authDomain: "netflix-gpt-7.firebaseapp.com",
  projectId: "netflix-gpt-7",
  storageBucket: "netflix-gpt-7.appspot.com",
  messagingSenderId: "146828043503",
  appId: "1:146828043503:web:fc6ce5ef4ebfb7f039271a",
  measurementId: "G-Q67VTP38JZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
