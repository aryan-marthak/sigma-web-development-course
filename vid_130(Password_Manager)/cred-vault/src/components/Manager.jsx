import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])

    const copyText = (text) => {
        toast('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 100000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        navigator.clipboard.writeText(text)
    }

    const showPassowrd = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eye.svg")) {
            ref.current.src = "icons/eyecross.svg"
            passwordRef.current.type = "text"
        }
        else {
            ref.current.src = "icons/eye.svg"
            passwordRef.current.type = "password"
        }
    }




    const savePassword = () => {
        if (form.site.length >= 3 && form.username.length >= 3 && form.password.length >= 3) {
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
            console.log(...passwordArray, form)
            setform({ site: "", username: "", password: "" })
            toast('Saved!', {
                position: "top-right",
                autoClose: 100000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        }
        else {
            toast("ERROR : Incomplete Credentials")
        }
    }

    const deletePassword = (id) => {
        console.log('deleting password with id', id)
        let c = confirm("Do you really want to delete this item?")
        if (confirm) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast('Deleted Successfully!', {
                position: "top-right",
                autoClose: 100000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        }
        // console.log([...passwordArray, form])
    }

    const editPassword = (id) => {
        console.log('editing password with id', id)
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        // localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
        // console.log([...passwordArray, form])
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={100000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="p-2 md:p-0 md:mycontainer mt-5 min-h-[78.11vh]">

                <h1 className=' text-4xl font-bold text-black underline underline-offset-4 text-center'>Cred<span className='text-purple-800'>Vault</span></h1>

                <p className=' text-lg text-center pt-1 text-purple-900'>Safeguarding Your Precious Information Securely</p>

                <div className='text-black flex flex-col p-4 px-40 gap-6 items-center'>

                    <input onChange={handleChange} value={form.site} placeholder='Enter website URL' className=' rounded-full border border-purple-800 w-full py-1 px-4 ' type="text" name='site' id='1' />

                    <div className='flex flex-col md:flex-row w-full justify-between gap-4'>

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

                        </lord-icon>Save</button>

                </div>

                <div className="passwords px-20 ">

                    <h2 className=' font-bold text-center text-purple-500 text-2xl underline underline-offset-2 py-4'>Your Passwords</h2>

                    {passwordArray.length === 0 && <div> No Passwords Saved </div>}
                    
                    {passwordArray.length != 0 &&
                        <table className="table-auto mb-10 w-full rounded-md overflow-hidden">
                            <thead className=' bg-purple-700 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className=' bg-purple-200'>
                                {passwordArray.map((item, index) => {

                                    return <tr key={index}>
                                        <td className=' py-2 border border-white text-center'>
                                            <div className='flex items-center justify-center'>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className=" size-7 cursor-pointer lordiconcopy" onClick={() => { copyText(item.site) }} >
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' py-2 border border-white text-center'>
                                            <div className='flex items-center justify-center'>
                                                <span>{item.username}</span>
                                                <div className=" size-7 cursor-pointer lordiconcopy" onClick={() => { copyText(item.username) }} >
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' py-2 border border-white text-center'>
                                            <div className='flex items-center justify-center'>
                                                <span>{item.password}</span>
                                                <div className=" size-7 cursor-pointer lordiconcopy" onClick={() => { copyText(item.password) }} >
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' py-2 border border-white text-center'>
                                            <span className='mx-1 cursor-pointer' onClick={() => { editPassword(item.id) }} >
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px" }}
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover">
                                                </lord-icon></span>
                                            <span className='mx-1 cursor-pointer' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px" }}
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover">
                                                </lord-icon></span>
                                        </td>
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
