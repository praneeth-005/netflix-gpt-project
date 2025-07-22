// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYThFuHlxyZVlru4iWUo7-4_G_jGhx-5k",
  authDomain: "netflix-gpt-clone-fd772.firebaseapp.com",
  projectId: "netflix-gpt-clone-fd772",
  storageBucket: "netflix-gpt-clone-fd772.firebasestorage.app",
  messagingSenderId: "89819091183",
  appId: "1:89819091183:web:eeb294d14c394dfeb88b1a",
  measurementId: "G-4H84Q0HPJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();