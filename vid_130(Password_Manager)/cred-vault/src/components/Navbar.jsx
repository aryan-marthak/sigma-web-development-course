import React from 'react'

const Navbar = () => {
    return (
        <nav className=" bg-purple-600 mycontainer">
            <div className="  flex justify-between items-center px-4 py-1 h-1 mycontainer">

                <div className='logo text-2xl font-bold text-white'>
                    
                    <span className=' underline-offset-4 underline'>CredVault</span>
                    
                    </div>
                <ul className=' font-medium text-lg text-white'>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="#">Home</a>
                        <a className='hover:font-bold' href="#">About</a>
                        <a className='hover:font-bold' href="#">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
