import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './components/Alert'

function App() {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500
    )
   }

  return (
    <>
      <Router>
        <Navbar title="TextUtil" />
       <div class="my-3 mx-3"><Alert alert={alert}/></div> 
        <Routes>
          <Route path="/" element={<TextForm heading="Enter Text To Analyse" showAlert={showAlert}/>} />
          <Route path="/about" element={<About heading="About Us" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
