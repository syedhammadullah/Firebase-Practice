// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBbWnZgvpSbfAi548rVL2SYYLgQ9Q-d1E",
  authDomain: "first-project-d6ca3.firebaseapp.com",
  projectId: "first-project-d6ca3",
  storageBucket: "first-project-d6ca3.appspot.com",
  messagingSenderId: "586425030980",
  appId: "1:586425030980:web:c19f3168c825b8b4029f11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authenticaion and get a reference to the service
const auth = getAuth(app);

// export let testing = "hammannd"
export { auth, createUserWithEmailAndPassword };
