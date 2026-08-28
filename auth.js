// auth.js
import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDUS75R4BH3-3e603dNvlKxIJU2ThNOc1k",
    authDomain: "river-falls-athletics-76449.firebaseapp.com",
    projectId: "river-falls-athletics-76449",
    storageBucket: "river-falls-athletics-76449.firebasestorage.app",
    messagingSenderId: "493469404152",
    appId: "1:493469404152:web:d47d73b848931d38ebe40d",
    measurementId: "G-CLQX2GN19Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check whether the user is logged in
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.replace("/student.html");
    }
});

// Export auth so other JavaScript files can use it
export { auth };