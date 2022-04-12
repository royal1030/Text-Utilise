
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import React, { useState } from 'react'
import About from './components/About';
function App() {
  const [mode,setmode]=useState('light');
  const [alert, setalert] = useState(null);

  
  const clearshowAlert=()=>{
    setalert(null);
  }

  const showAlert=(message,type)=>{
      setalert({
        msg:message,
        typ:type
      })
      const myTimeout = setTimeout(clearshowAlert, 1500);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='rgb(43 47 52)';
      document.body.style.color='white';
      showAlert('Dark Mode has been Enabled','success');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert('Light Mode has been Enabled','success');
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text-Utils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">

    <Routes>
   
           
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" />} />
          <Route exact path="/about" element={<About/>}/>

    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
