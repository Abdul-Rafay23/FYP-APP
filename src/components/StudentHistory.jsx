import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css"; // import the styles
import { IoIosLock } from "react-icons/io";


const StudentHistory = () => {
  const navigate = useNavigate();

  // State for the form data
  const [fullName, setFullName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [rank, setRank] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

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
              Student History
            </a>
          </li>
        </ul>

        {/* Back Button */}
        <button onClick={() => navigate(-1)} className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
          Back
        </button>
      </nav>

      {/* Form */}
      <div className='w-full h-screen bg-gray-800 flex justify-center items-center px-4'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">History</h1>

          {/* Full Name */}
          <div className="mb-2 w-40 h-12 rounded-3xl ml-36  bg-amber-400 p-0.5 justify-center text-center ">
            <h1 className=' text-2xl text-black font-bold mt-1.5'>Quizzes</h1>
            
          </div>
          <h1 className="text-xl font-semibold text-end text-amber-400  mb-2">View all</h1>
          {/* History Banner */}
          <div className="mb-4 w-full h-32 rounded-2xl  bg-amber-400 p-0.5 justify-center text-center">
            <div>
                <h1 className=' text-md font-bold'>13-March-2025</h1>
            </div>
            <div className=' w-32 h-6 rounded-xl bg-black mt-0.5 ml-40 Flex justify-center text-center '>
                <h1 className=' text-amber-50 text-sm '> Programing</h1>
            </div>
            <div>
                <h1 className=' text-md font-bold'>C++ Quiz No 1</h1>
            </div>
            <div className=' w-48 h-8 rounded-xl bg-black mt-2 ml-32 Flex justify-center text-center '>
                <h1 className=' text-amber-50 text-sm p-1.5 '> Obtained Marks: 8/10</h1>
            </div>
          </div>

          <div className="mb-2 w-46 h-12 rounded-3xl ml-33    bg-amber-400 p-0.5 justify-center text-center ">
            <h1 className=' text-2xl text-black font-bold mt-1.5'>Competitions</h1>
            
          </div>
          <h1 className="text-xl font-semibold text-end text-amber-400  mb-2">View all</h1>
          {/* History Banner */}
          <div className="mb-8 w-full h-32 rounded-2xl  bg-amber-400 p-0.5 justify-center text-center">
            
            <div className=' w-32 h-6 rounded-xl bg-black mt-5.5 ml-40 Flex justify-center text-center '>
                <h1 className=' text-amber-50 text-sm '> Programing</h1>
            </div>
            <div>
                <h1 className=' text-md font-bold'>C++ Competition Fall 23</h1>
            </div>
            <div className=' w-48 h-8 rounded-xl bg-black mt-2 ml-32 Flex justify-center text-center '>
                <h1 className=' text-amber-50 text-sm p-1.5 '> 3rd Place</h1>
            </div>
          </div>

          

       

        


         


          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-1/2 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition"
            >
              Back
            </button>
          
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentHistory;
