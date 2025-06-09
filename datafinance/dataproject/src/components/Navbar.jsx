import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center-center h-24 max-w-[1240px] mx-auto px-4 '>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] '>REACT.</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resource</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div>
            <AiOutlineMenu />
        </div>
    </div>

  )
}

export default Navbar