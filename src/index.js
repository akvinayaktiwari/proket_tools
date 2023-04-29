import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
=======
import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
>>>>>>> c747aef (Initialize project using Create React App)
=======
import { BrowserRouter } from 'react-router-dom';
import {Route,Routes} from "react-router-dom";
>>>>>>> 5bb6e61 (changes done)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>

  </React.StrictMode>
);
// import {BrowserRouter as Router}  from "react-router-dom";

<<<<<<< HEAD
<<<<<<< HEAD
=======
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> c747aef (Initialize project using Create React App)
=======
// ReactDOM.render(
//   <React.StrictMode>
//   <Router>
//     <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
>>>>>>> 5bb6e61 (changes done)
