import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // import the styles

const Makequiz2 = () => {
  const navigate = useNavigate();

  // State for the dates
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
              Add Quiz Questions
            </a>
          </li>
        </ul>
        
        {/* Logout Button */}
        <button onClick={() => navigate(-1)} className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
          Back
        </button>
      </nav>

      {/* Form */}
      <div className='w-full min-h-screen bg-gray-800 flex justify-center items-center p-4'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Add Questions</h1>

          {/* Automatically Button */}
          <div className="mb-8">
            <button onClick={() => navigate("/makequiza")} type="button" className="w-full h-16 sm:h-40 bg-amber-400 text-white py-6 rounded-md hover:bg-amber-600 text-xl sm:text-4xl transition ml-2">Automatically</button>    
          </div>

          {/* Manually Button */}
          <div className="mb-8">
            <button onClick={() => navigate("/makequizm")} type="button" className="w-full h-16 sm:h-40 bg-amber-400 text-white py-6 rounded-md hover:bg-amber-600 transition text-xl sm:text-4xl ml-2">Manually</button>    
          </div>

          {/* Back Button */}
          <div className="mb-8">
            <button onClick={() => navigate(-1)} type="button" className="w-full h-16 sm:h-40 bg-gray-400 text-white py-6 rounded-md hover:bg-gray-600 transition ml-2">Back</button>    
          </div>

        </form>
      </div>
    </>
  );
}

export default Makequiz2;
