import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <a href="#">Welcome</a>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">Services</a></li>
            <li className="nav-item"><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
