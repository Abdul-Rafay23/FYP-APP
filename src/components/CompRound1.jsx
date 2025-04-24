import React from 'react'
import { FaBars } from 'react-icons/fa';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const CompRound1 = () => {
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
            <a className='hover:bg-amber-400 rounded-lg transition duration-300 mr-50 text-3xl'>
              Competition Round 1 (MCQ)
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

      <div className='w-full h-screen bg-gray-800 flex justify-center items-center'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Test 2018</h1>

          <div className="mb-4 flex justify-center">
            <h1 className=' text-3xl flex justify-center text-amber-50 font-bold'> Round Details</h1>
          </div>

          <div className=' mb-4'>
          <label htmlFor="level" className="block text-xl text-amber-50 mb-2">Round 1:</label>
          <input
              id="question"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50"
              placeholder="Year"
            />
          </div>

        

          <div className="mb-36">
            <label  className="block text-xl text-amber-50 mb-2">Type:</label>
            <select
              id="level"
              className="w-full p-3 border border-gray-300 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <option value="" disabled>MCQs</option>
              <option value="1">MCQs</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
            </select>
          </div>

          <div className="mb-8 flex justify-center">
            <button type="button" className="w-1/2 sm:w-1/3 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition">
              Add Questions
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="w-full sm:w-1/2 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition">
              Back
            </button>
            <button
              onClick={() => navigate("/compmcq")}
              type="submit"
              className="w-full sm:w-1/2 bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CompRound1;
