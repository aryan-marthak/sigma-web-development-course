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

  // const [name, setname] = useState("aryan")
  const [form, setForm] = useState({
    email:"",
    phone:""
  })



  const clicking = ()=>{
    alert("i have been clicked")
  }
  // const mousing = ()=>{
  //   setbgcolor({
  //     color: "yellow",
  //     text: "i am yellow"
  //   });
  // }
  // const gnisoum = ()=>{
  //   setbgcolor({
  //     color: "red",
  //     text: "i am red"
  //   });
  // }
  
  const handleChange = (e)=>{
    // setname(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }
  

  return (
    <>
     <button onClick={clicking}>click me</button>
     {/* <div onMouseEnter={mousing} onMouseLeave={gnisoum} style={{backgroundColor: bgcolor.color}} className="red">{bgcolor.text}</div> */}
     <input type="text" name='email' value={form.email} onChange={handleChange} />
     <input type="text" name='phone' value={form.phone} onChange={handleChange} />
    </>

  )
}

export default App
