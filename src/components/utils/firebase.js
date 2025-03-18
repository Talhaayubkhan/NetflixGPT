// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-gpt-133cd.firebaseapp.com",
  projectId: "netflix-gpt-133cd",
  storageBucket: "netflix-gpt-133cd.firebasestorage.app",
  messagingSenderId: "126373589376",
  appId: "1:126373589376:web:cf3266e5922cc748685165",
  measurementId: "G-H5VSKZ6GHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
