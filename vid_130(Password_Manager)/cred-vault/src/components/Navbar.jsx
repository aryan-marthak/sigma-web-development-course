import React from 'react'

const Navbar = () => {
    return (
        <nav className=" bg-stone-800  mycontainer">
            <div className=" w-full flex justify-between items-center px-4 py-0 ">

                <div className='logo text-3xl font-bold'>
                    
                    <span className=' underline-offset-4 underline text-white'>Cred</span><span className=' underline underline-offset-4 decoration-white text-purple-700'>Vault</span>
                    
                    </div>
                {/* <ul className=' font-medium text-lg text-white'>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="#">Home</a>
                        <a className='hover:font-bold' href="#">About</a>
                        <a className='hover:font-bold' href="#">Contacts</a>
                    </li>
                </ul> */}
                <button className=' text-white border-2  my-5 rounded-full  flex justify-center items-center'>
                    <img className='invert w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <span className=' font-bold px-2'>GitHub</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
