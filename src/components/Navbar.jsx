import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <>
    <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>Programming Community</h1>
        <ul className='hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold'>
          <li>
            <span className='hover:bg-amber-400 rounded-lg transition duration-300 mr-50 text-3xl'>
              Student Competitions
            </span>
          </li>
        </ul>
        <button
          onClick={() => navigate(-1)}
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'
        >
          Back
        </button>
      </nav>
    </>
  )
}

export default Navbar