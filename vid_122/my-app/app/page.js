
// import { useState, useEffect } from "react";
import fs from "fs/promises"
import Navbar from "@/components/Navbar"

export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("hey i am here")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      <Navbar/>
    I am a component 
    {/* {count} */}
    {/* <button onClick={()=>setcount(count+1)}>click me</button> */}
    </div>
  );
}
  

