import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Manager = () => {
    const ref = useRef()

    const [passwordArray, setpasswordArray] = useState([])

    useEffect(()=>{
        let passwords = localStorage.getItem("passwords")
        let passwordArray;
        if(passwords){
            passwordArray = JSON.parse(passwords)
        }
        
    })

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    const [form, setform] = useState({ site: "", username: "", password: "" })

    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log(...passwordArray, form)
    }

    const showPassowrd = () => {
        //   alert("showing password")
        if (ref.current.src.includes("icons/eye.svg")) {

            ref.current.src = "icons/eyecross.svg"
        }
        else {
            ref.current.src = "icons/eye.svg"
        }
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#9f9eff_100%)]"></div>


            <div className=" mycontainer">
                <h1 className=' text-4xl font-bold text-purple-600 underline underline-offset-4 text-center'>CredVault</h1>
                <p className=' text-lg text-center pt-1 text-purple-900'>Safeguarding Your Precious Information Securely</p>
                <div className='text-black flex flex-col p-4 px-40 gap-6 items-center'>
                    <input onChange={handleChange} value={form.site} placeholder='Enter website URL' className=' rounded-full border border-purple-800 w-full py-1 px-4 ' type="text" name='site' id='' />
                    <div className='flex w-full justify-between gap-4'>
                        <input onChange={handleChange} value={form.username} placeholder='Enter Username' className='rounded-full border border-purple-800 w-[75%] py-1 px-4' type="text" name="username" id="" />
                        <div className=' relative '>
                            <input onChange={handleChange} value={form.password} placeholder='Enter Password' className='rounded-full border border-purple-800 w-full py-1 px-4' type="text" name="password" id="" />
                            <span onClick={showPassowrd} className=' cursor-pointer absolute right-0'><img ref={ref} className=' px-2 pt-[5px]' src="icons/eye.svg" alt="eye" /></span>
                        </div>
                    </div>
                    <button onClick={savePassword} className=' gap-2 hover:bg-purple-500 font-bold flex justify-center items-center bg-purple-600 text-white font-outline-2 rounded-full px-6 border border-purple-900 border-2 py-2 w-fit'>
                        <lord-icon
                            src="https://cdn.lordicon.com/hqymfzvj.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                        >

                        </lord-icon>Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager
