import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className=' bg-stone-800 flex-col logo text-base flex justify-center  w-full bottom-0 items-center font-bold'>
                <div><span className=' underline-offset-4 underline text-white'>Cred</span><span className=' underline underline-offset-4 decoration-white text-purple-700'>Vault</span>
                </div>
                <div className=' gap-2 pt-1 text-xs pb-1.5 flex text-white '>
                    <span>Made with </span> <img className='w-4 item' src="/icons/heart.svg" alt="" /><span> by Aryan</span>
                </div>
            </div>
        </div>
    )
}

export default Footer


