//import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert=(message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setalert(null);
    }, 1050); 
  }

  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#000000'
      showalert("Dark Mode Enabled","dark");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = '#f8f9fa'
      showalert("Light Mode Enabled","dark");
    }
  }

  return (
    <>
    <Router>
     <Navbar title="TextUtils" abouttext="About" mode = {mode} toggleMode={togglemode}/>
     <Alert alert = {alert}/>
     <div className="container my-3">
       <Routes>
         <Route exact path="/about" element={<About mode = {mode}/>}/>
         <Route exact path="/" element={<TextForm showalert = {showalert}  mode = {mode} />}/>
       </Routes>
     </div>
     </Router>
    </>
  );
}

export default App;