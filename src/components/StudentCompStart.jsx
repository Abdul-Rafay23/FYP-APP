import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css"; // import the styles
import { IoIosLock } from "react-icons/io";
import img1 from "../Assets/Brackets.png";


const StudentCompStart = () => {
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
              Competition 2024
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
          <h1 className="text-2xl font-semibold text-center text-amber-50 mb-2">Subject</h1>
          <h1 className="text-xl font-semibold text-center text-amber-400 mb-6">C++</h1>


          {/* History Banner */}
          <div className="mb-2 w-full h-32 rounded-2xl  bg-amber-400 p-0.5 justify-center text-center">
            <div>
                <h1 className=' text-2xl font-bold mb-4 mt-4'>Eligible</h1>
            </div>
           
            <div>
                <h1 className=' text-2xl font-bold mb-4'>Level 1 - Level 2</h1>
            </div>
         
          </div>
        {/* Seperation */}


                  {/* History Banner */}
                  <div className="mb-2 w-full h-32 rounded-2xl  bg-amber-400 p-0.5 justify-center text-center">
            <div>
                <h1 className=' text-2xl font-bold mb-4 mt-4'>Number of Participants</h1>
            </div>
           
            <div>
                <h1 className=' text-2xl font-bold mb-4'>10</h1>
            </div>
         
          </div>

          <img className="w-full h-auto lg:h-full mb-6 object-cover ml-28 mt-6 lg:mt-0 lg:w-1/2" src={img1} alt="People working in an office" />
        {/* Seperation */}

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/stucomprnddate")}
              className="w-full sm:w-1/2 bg-gray-300 font-bold text-gray-800 py-3 rounded-md hover:bg-gray-400 transition"
            >
              Start Tournament
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentCompStart;
