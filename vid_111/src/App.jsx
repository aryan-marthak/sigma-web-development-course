import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setcards] = useState([])

  const fetchdata = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchdata()
  }, [])
  

  return (
    <>
      <Navbar/>
      <div className="container">
        {cards.map((card)=>{
          return <div key={card.id} className="card">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>Written By : {card.userId}</span>
          </div>
        })}
      </div>
    </>
  )
}

export default App
