import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-darkBlue-900  text-white h-12 items-center  px-11  '>
        <div className="brandName text-lg font-extrabold">TaskItUp</div>
      <ul className='flex list-none gap-8 font-extralight' >
        <li className='cursor-pointer font-semibold hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer font-semibold hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </div>
  )
}

export default Navbar
