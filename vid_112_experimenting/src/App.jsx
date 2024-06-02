import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bgcolor, setbgcolor] = useState({
    color: "red",
    text: "i am red"
  });

  const clicking = ()=>{
    alert("i have been clicked")
  }
  const mousing = ()=>{
    setbgcolor({
      color: "yellow",
      text: "i am yellow"
    });
  }
  const gnisoum = ()=>{
    setbgcolor({
      color: "red",
      text: "i am red"
    });
  }

  return (
    <>
     <button onClick={clicking}>click me</button>
     <div onMouseEnter={mousing} onMouseLeave={gnisoum} style={{backgroundColor: bgcolor.color}} className="red">{bgcolor.text}</div>
    </>

  )
}

export default App
