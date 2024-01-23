// Import the necessary Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, collection } from 'https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUx8hfH-NxXTKBayK1lWRZ-oO20C_OpaQ",
    authDomain: "thook-12674.firebaseapp.com",
    projectId: "thook-12674",
    storageBucket: "thook-12674.appspot.com",
    messagingSenderId: "947780090162",
    appId: "1:947780090162:web:a64d7fb87bb9ac9f3fbf2b",
    measurementId: "G-7EJGG9N9QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a reference to a Firestore collection
const usersCollection = collection(db, 'users');

document.addEventListener("DOMContentLoaded", function() {
  // Access the form element
  const form = document.getElementById("loginForm");

  // Add event listener for form submission
  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents the default form submission behavior

      // Validate the form fields
      const username = form.elements["username"].value;
      const password = form.elements["password"].value;

      if (!username.trim()) {
          alert("Please enter a username");
          return;
      }

      if (!password.trim()) {
          alert("Please enter a password");
          return;
      }

      // Save user data to Firestore
      db.collection("users").add({
          username: username,
          password: password
      })
      .then((docRef) => {
          console.log("User added with ID: ", docRef.id);
          // Clear the form after saving
          form.reset();
      })
      .catch((error) => {
          console.error("Error adding user: ", error);
      });
  });
});

function saveUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username.trim()) {
      alert("Please enter a username");
      return;
  }

  if (!password.trim()) {
      alert("Please enter a password");
      return;
  }

  // Save user data to Firestore
  usersCollection.add({
      username: username,
      password: password
  })
  .then((docRef) => {
      console.log("User added with ID: ", docRef.id);
      // Clear the form after saving
      document.getElementById('userForm').reset();
  })
  .catch((error) => {
      console.error("Error adding user: ", error);
  });
}
