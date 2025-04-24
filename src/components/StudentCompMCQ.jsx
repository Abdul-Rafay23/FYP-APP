import React from 'react'
import img from '../Assets/Black-Transparent.png'; // import the image
import img1 from '../Assets/golden-winners-cup-b.png';
import img2 from '../Assets/c-plus-plus-4096.png';
import { FaBars } from 'react-icons/fa';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoMdRadioButtonOff } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const StudentCompMCQ = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>Programming Community</h1>
        </div>

        {/* Navigation Menu */}
        <ul className='hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold'>
          <li>
            <a className='hover:bg-amber-400 rounded-lg transition duration-300 mr-50 text-3xl '>
              Competition (MCQ)
            </a>
          </li>
        </ul>
        
        {/* Logout Button */}
        <button onClick={() => navigate(-1)} className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
          Back
        </button>
      </nav>

      <div className='w-screen h-screen bg-gray-800 flex justify-center items-center p-6'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">MCQ</h1>

          <div className="mb-4 flex justify-center">
            <h1 className="text-2xl font-semibold text-center text-amber-50 mb-4">Total Questions 20</h1>
          </div>

          <div className="mb-4 flex justify-center">
            <h1 className="text-2xl font-semibold text-center text-amber-50 mb-4">1/20</h1>
          </div>

          <div className="mb-4 h-10 w-full rounded-2xl border-8 border-amber-400 bg-amber-400 flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-center text-amber-50">Questions</h1>
          </div>

          <div className="mb-4 h-20 w-full rounded-2xl border-8 border-amber-400 bg-amber-400 flex">
            <h1 className="text-2xl font-semibold text-center text-amber-50">Q1. </h1>
          </div>

          {/* Options */}
          <div className="mb-2 flex flex-wrap justify-center p-4 gap-4">
            <div className='min-w-1/2 sm:min-w-1/3 md:min-w-1/4 h-10 bg-amber-400 flex items-center justify-center rounded-2xl border-2 border-amber-500'>
              <h1 className='text-2xl text-amber-50 font-bold'>Option 1</h1>
              <IoMdRadioButtonOff className='ml-3 text-lg' />
            </div>

            <div className='min-w-1/2 sm:min-w-1/3 md:min-w-1/4 h-10 bg-amber-400 flex items-center justify-center rounded-2xl border-2 border-amber-500'>
              <h1 className='text-2xl text-amber-50 font-bold'>Option 2</h1>
              <IoMdRadioButtonOff className='ml-3 text-lg' />
            </div>
          </div>

          <div className="mb-16 flex flex-wrap justify-center p-4 gap-4">
            <div className='min-w-1/2 sm:min-w-1/3 md:min-w-1/4 h-10 bg-amber-400 flex items-center justify-center rounded-2xl border-2 border-amber-500'>
              <h1 className='text-2xl text-amber-50 font-bold'>Option 3</h1>
              <IoMdRadioButtonOff className='ml-3 text-lg' />
            </div>

            <div className='min-w-1/2 sm:min-w-1/3 md:min-w-1/4 h-10 bg-amber-400 flex items-center justify-center rounded-2xl border-2 border-amber-500'>
              <h1 className='text-2xl text-amber-50 font-bold'>Option 4</h1>
              <IoMdRadioButtonOff className='ml-3 text-lg' />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            <button onClick={() => navigate(-1)} type="button" className="w-full sm:w-1/2 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition">Back</button>
            <button onClick={() => navigate("/compsp")} type="submit" className="w-full sm:w-1/2 bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition ml-2">Next</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default StudentCompMCQ
