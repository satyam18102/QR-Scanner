import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scan from "./Scan.jsx";
import Scanner from "./Scanner.jsx";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <div className=''>
      <Routes>
        <Route path="/" Component={App}></Route>
        <Route path="/scanner" Component={Scanner}></Route>
        <Route path="/scan" Component={Scan}></Route>
      </Routes>
    </div>
    </Router>
  </StrictMode>,
)
