
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
  );
}

export default App;
