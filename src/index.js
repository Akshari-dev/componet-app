import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import First from "./First"; 
// import MERN from "./MERN.js";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Database from "./Database";


ReactDOM.render(
  <React.StrictMode>
 
    <First/>
    
            <Frontend/>
            <Database/>
            <Backend/>
            <Frontend/>
            <Database/>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
