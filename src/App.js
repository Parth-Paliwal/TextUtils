import React from "react";
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';
// import About from './Components/About'



function App() {
  const [mode, setMode] = useState('light');
  const [alert, newAlert] = useState(null);

  let showalert = (message, type) => {
    newAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      newAlert(null)
    }, 1800);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showalert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showalert("light mode has been enabled", "success")
    }
  }

  return (
    <>
        
           <Navbar title="TextUtils" about="about us" mode={mode} toggle={toggleMode}/>
        <Alert alert={alert} />
         
           
            <Textarea setalert={showalert} heading="enter your text here" mode={mode} />
            
        
          
          
    </>
  );
}

export default App;
