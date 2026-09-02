// auth.js
import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA4ZMuE3-l-PwTQlPvLpykFzUvk7QDF9Z0",
  authDomain: "wileybucks.firebaseapp.com",
  projectId: "wileybucks",
  storageBucket: "wileybucks.firebasestorage.app",
  messagingSenderId: "1037519230312",
  appId: "1:1037519230312:web:b6ed0297b5d677808972dd",
  measurementId: "G-E81C7PYNC7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check whether the user is logged in
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.replace("/index.html");
    }
});

// Export auth so other JavaScript files can use it
export { auth };