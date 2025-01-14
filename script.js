// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh_Jc4_SumULLfF4dvPK8BzW3nekvnbWk",
  authDomain: "first-firebase-365bd.firebaseapp.com",
  projectId: "first-firebase-365bd",
  storageBucket: "first-firebase-365bd.firebasestorage.app",
  messagingSenderId: "1005299612360",
  appId: "1:1005299612360:web:d11e64e1bed6209b1183fd",
  measurementId: "G-PD0S8WWX1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize the Firebase Authentication service

// Handle registration
const registerButton = document.getElementById('register');
registerButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Account created successfully! You can now sign in.");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// Handle sign in
const signInButton = document.getElementById('signIn');
signInButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Welcome back, " + user.email);
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});