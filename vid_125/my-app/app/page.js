"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input className="text-black my-4 mx-4" type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input className="text-black my-4 mx-4" type="text" name="add" id="add" />
        </div>
        <div>
        <button className="border border-white px-3">Submit</button>
        </div>
      </form>
    </div>
  );
}
