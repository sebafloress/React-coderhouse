// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCB99sKvlPuyMAXh3BHOrRZSuU7OWZ7Wts",
    authDomain: "proyectocoder-43467.firebaseapp.com",
    projectId: "proyectocoder-43467",
    storageBucket: "proyectocoder-43467.appspot.com",
    messagingSenderId: "29684164937",
    appId: "1:29684164937:web:514da3997a79dd86091298"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);
root.render(<App />);
