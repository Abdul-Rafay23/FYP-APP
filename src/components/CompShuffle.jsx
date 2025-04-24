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

const CompShuffle = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>
            Programming Community
          </h1>
        </div>

        {/* Navigation Menu */}
        <ul className='hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold'>
          <li>
            <a className='hover:bg-amber-400 rounded-lg transition duration-300 mr-50 text-3xl'>
              Competition Shuffle
            </a>
          </li>
        </ul>

        {/* Logout Button */}
        <button 
          onClick={() => navigate(-1)} 
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
          Back
        </button>
      </nav>

      <div className='w-screen h-screen bg-gray-800 flex justify-center items-center'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Shuffle</h1>
          
          <div className="mb-4 flex justify-center">
            <h1 className="text-2xl font-semibold text-center text-amber-50 mb-4">
              Shuffle the code in correct order
            </h1>
          </div>

          <div className="mb-4 flex justify-center items-center w-full h-12 rounded-2xl bg-gray-400">
            <h1 className="text-2xl font-semibold text-black">cout"Print"</h1>
          </div>

          <div className="mb-4 flex justify-center items-center w-full h-12 rounded-2xl bg-gray-400">
            <h1 className="text-2xl font-semibold text-black">int a;</h1>
          </div>

          <div className="mb-4 flex justify-center items-center w-full h-12 rounded-2xl bg-gray-400">
            <h1 className="text-2xl font-semibold text-black"> cin a;</h1>
          </div>

          <div className="mb-4 flex justify-center items-center w-full h-12 rounded-2xl bg-gray-400">
            <h1 className="text-2xl font-semibold text-black"> void main</h1>
          </div>

          <div className="mb-1 flex justify-center p-4 w-full h-10 rounded-2xl">
            <h1 className='text-2xl text-amber-50 font-extrabold'>Time Remaining:</h1>
          </div>

          <div className="mb-4 flex justify-center p-4 w-full h-20 rounded-2xl">
            <h1 className='text-4xl text-amber-50 font-extrabold'>00:01:13</h1>
          </div>

          <div className="flex flex-col sm:flex-row justify-between">
            <button 
              onClick={() => navigate(-1)} 
              type="button" 
              className="w-full sm:w-1/2 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition mb-2 sm:mb-0">
              Back
            </button>

            <button 
              onClick={() => navigate("/buzzer")} 
              type="submit" 
              className="w-full sm:w-1/2 bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition sm:ml-2">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CompShuffle;
