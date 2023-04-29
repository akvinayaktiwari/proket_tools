<<<<<<< HEAD
<<<<<<< HEAD
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> c747aef (Initialize project using Create React App)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    App page
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> c747aef (Initialize project using Create React App)
    </div>
=======
import {Route,Routes} from "react-router-dom";
import HomePage from './HomePage'
import QrGenerator from "./toolspage/QrGenerator"
import InvoiceGenerator from "./toolspage/InvoiceGenerator"
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/qr" element={<QrGenerator/>} />
      <Route path="/invoice" element={<InvoiceGenerator/>} />
    </Routes>
>>>>>>> 5bb6e61 (changes done)
  );
}

export default App;
