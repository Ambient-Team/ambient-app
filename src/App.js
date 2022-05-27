import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Button from '@mui/material/Button';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBamRPS6NxxPg7lplFrxZd36fLWg9ZUTDY",
  authDomain: "ambient-systems.firebaseapp.com",
  databaseURL: "https://ambient-systems-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ambient-systems",
  storageBucket: "ambient-systems.appspot.com",
  messagingSenderId: "1001740093061",
  appId: "1:1001740093061:web:80b8003e2dfed714b90bec"
};

// Initialize Firebase
initializeApp(firebaseConfig);


function App() {


  return (
    <div className="App">
      <div className='App-sidebar'>

      </div>

      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </header>

      <body className='App-body'>
        <Button variant="contained">你好，世界</Button>

      </body>
      
    </div>
  );
}

export default App;
