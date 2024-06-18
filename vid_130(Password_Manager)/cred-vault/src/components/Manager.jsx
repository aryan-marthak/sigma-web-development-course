import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    
    const [passwordArray, setPasswordArray] = useState([])
    const [form, setform] = useState({ site: "", username: "", password: "" })

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    })

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log(...passwordArray, form)
    }

    const showPassowrd = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("icons/eye.svg")) {
            
            ref.current.src = "icons/eyecross.svg"
            passwordRef.current.type = "text"
            }
            else {
                ref.current.src = "icons/eye.svg"
                passwordRef.current.type = "password"
        }
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>


            <div className=" mycontainer mt-5">
                <h1 className=' text-4xl font-bold text-black underline underline-offset-4 text-center'>Cred<span className='text-purple-800'>Vault</span></h1>
                <p className=' text-lg text-center pt-1 text-purple-900'>Safeguarding Your Precious Information Securely</p>
                <div className='text-black flex flex-col p-4 px-40 gap-6 items-center'>
                    <input onChange={handleChange} value={form.site} placeholder='Enter website URL' className=' rounded-full border border-purple-800 w-full py-1 px-4 ' type="text" name='site' id='1' />
                    <div className='flex w-full justify-between gap-4'>
                        <input onChange={handleChange} value={form.username} placeholder='Enter Username' className='rounded-full border border-purple-800 w-[75%] py-1 px-4' type="text" name="username" id="2" />
                        <div className=' relative '>
                            <input ref={passwordRef} onChange={handleChange} value={form.password} placeholder='Enter Password' className='rounded-full border border-purple-800 w-full py-1 px-4' type="password" name="password" id="3" />
                            <span onClick={showPassowrd} className=' cursor-pointer absolute right-0'><img ref={ref} className=' px-2 pt-[5px]' src="icons/eye.svg" alt="eye" /></span>
                        </div>
                    </div>
                    <button onClick={savePassword} className=' gap-2 hover:bg-purple-600 font-bold flex justify-center items-center bg-purple-800 text-white font-outline-2 rounded-full px-6 border-purple-900 border-2 py-2 w-fit'>
                        <lord-icon
                            src="https://cdn.lordicon.com/hqymfzvj.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                        >

                        </lord-icon>Add Password</button>
                </div>
                <div className="passwords px-20 ">
                    <h2 className=' font-bold text-center text-purple-500 text-2xl underline underline-offset-2 py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No Passwords Saved </div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto mb-24 w-full rounded-md overflow-hidden">
                            <thead className=' bg-purple-700 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                </tr>
                            </thead>
                            <tbody className=' bg-purple-200'>
                                {passwordArray.map((item, index) => {

                                    return <tr key={index}>
                                        <td className=' py-2 border border-white text-center w-16'><a href={item.site} target='_blank'>{item.site}</a></td>
                                        <td className=' py-2 border border-white text-center w-16'>{item.username}</td>
                                        <td className=' py-2 border border-white text-center w-16'>{item.password}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
