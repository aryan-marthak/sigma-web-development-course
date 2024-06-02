import React, {useEffect} from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
    alert("I run on every render")
  })
  useEffect(() => {
    alert("I run on first render")
  }, [])
  useEffect(() => {
    alert("I run on when color is changed")
  }, [color])

  //example of cleanup function

  useEffect(() => {
    alert("I run on first render of app.jsx")
    return()=>{
      alert("component was unmounted")
    }
  }, [])

  return (
    <div>
      i am a navbar of {color} color heheee.......
    </div>
  )
}

export default Navbar
