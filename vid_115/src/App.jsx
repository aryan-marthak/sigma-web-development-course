import { useState } from 'react'
import Home from './components/Home'
import './App.css'
import Login from './components/Login'
import User from './components/User'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'

function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element:  <><Navbar/><Home/></>
      },
      {
        path: "/login",
        element: <><Navbar/><Login/></>
      },
      {
        path: "/about",
        element:  <><Navbar/><About/></>
      },
      {
        path: "/user/:username",
        element:  <><Navbar/><User/></>
      },
      
    ])
  
  return (
    <>
     
      <RouterProvider router={router} />
    </>
  )
}

export default App
