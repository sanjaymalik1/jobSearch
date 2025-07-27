// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnxoDK4OqJDyKk5DcUytQRjco1vOvotGU",
  authDomain: "fir-jobsearch-a6c24.firebaseapp.com",
  projectId: "fir-jobsearch-a6c24",
  storageBucket: "fir-jobsearch-a6c24.firebasestorage.app",
  messagingSenderId: "1014454178668",
  appId: "1:1014454178668:web:1855dad8dd679d08c19949",
  measurementId: "G-LK8J5XL4L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;