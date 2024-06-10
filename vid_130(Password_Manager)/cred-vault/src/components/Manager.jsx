import React from 'react'

const Manager = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#9f9eff_100%)]"></div>


            <div className=" mycontainer">
                <h1 className=' text-4xl font-bold text-purple-600 underline underline-offset-4 text-center'>CredVault</h1>
                <p className=' text-lg text-center pt-1 text-purple-900'>Safeguarding Your Precious Information Securely</p>
                <div className='text-black flex flex-col p-4 px-40 gap-6 items-center'>
                    <input placeholder='Enter website URL' className=' rounded-full border border-purple-800 w-full py-1 px-4 ' type="text" name='' id='' />
                    <div className='flex w-full justify-between gap-4'>
                        <input placeholder='Enter Username' className='rounded-full border border-purple-800 w-[75%] py-1 px-4' type="text" name="" id="" />
                        <div className=' relative '>
                        <input placeholder='Enter Password' className='rounded-full border border-purple-800 w-full py-1 px-4' type="text" name="" id="" />
                        <span className=' cursor-pointer absolute right-0'><img className=' px-2 pt-[5px]' src="icons/show.svg" alt="eye" /></span>
                        </div>
                    </div>
                    <button className=' gap-2 hover:bg-purple-500 font-bold flex justify-center items-center bg-purple-600 text-white font-outline-2 rounded-full px-6 border border-purple-900 border-2 py-2 w-fit'>
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
