import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="card" style={{overflow: "hidden"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySM-NgwIrTPoRsdo_PMPWz8CEZjjEDYH79g&s" alt="" width={230} style={{border: "2px solid cyan"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card
