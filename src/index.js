import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";
import{
  getFireStore,
  collection
} from 'firebase/firestore'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const firebaseConfig = {
  apiKey: "AIzaSyBHRyuOeJenmiEstwz8O2AyQloxkMVg1ck",
  authDomain: "myblog-8547c.firebaseapp.com",
  projectId: "myblog-8547c",
  storageBucket: "myblog-8547c.appspot.com",
  messagingSenderId: "1056969993052",
  appId: "1:1056969993052:web:c620a5e9d2c5fc2aa6ef99"
};