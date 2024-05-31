import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(0)
  return (
    
    
    <div className="App">
      <Navbar logoText="CodeWithHarry" />
      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value + 1 )}}  >Click Me</button>
      <Footer/>
    </div>

)

}

export default App;
