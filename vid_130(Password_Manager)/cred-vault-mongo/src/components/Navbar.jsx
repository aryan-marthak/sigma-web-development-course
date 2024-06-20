import React from 'react'
// import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <nav className=" bg-stone-800 md:px-40 px-4">
            <div className=" w-full flex justify-between items-center px-0 py-0 ">

                <div className=' logo text-3xl font-bold'>
                    
                    <span className=' underline-offset-4 underline text-white'>Cred</span><span className=' underline underline-offset-4 decoration-white text-purple-700'>Vault</span>
                    
                    </div>
                <a target='_blank' href="https://github.com/aryan-marthak/sigma-web-development-course/tree/main/vid_130(Password_Manager)/cred-vault">
                <button className=' text-white border-2 ring-4 ring-purple-500 my-5 rounded-full  flex justify-center items-center'>
                    <img className='invert w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <span className=' font-bold px-2'>GitHub</span>
                </button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
