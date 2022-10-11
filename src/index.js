import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8BrB9UG-0uHFSt25d9J4UnD_o6P8pdXQ",
  authDomain: "workshopcami.firebaseapp.com",
  projectId: "workshopcami",
  storageBucket: "workshopcami.appspot.com",
  messagingSenderId: "1025491450710",
  appId: "1:1025491450710:web:4364204ef94568643334f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  /* </React.StrictMode> */
);
