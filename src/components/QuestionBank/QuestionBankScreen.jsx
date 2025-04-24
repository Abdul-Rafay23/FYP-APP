import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionBankScreen = () => {
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
            <a className='hover:bg-amber-400 rounded-lg transition duration-300 text-3xl'>
             Question Bank Screen
            </a>
          </li>
        </ul>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
          Back
        </button>
      </nav>

      <div className='w-full h-screen bg-gray-800 flex justify-center items-center'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl flex flex-col gap-6">
            <div className=' flex justify-center'>
                <h1 className=' text-2xl text-amber-50'>Select Category</h1>
            </div>
          <button className='bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl text-xl'>
            MCQ
          </button>
          <button className='bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl text-xl'>
            Short Question
          </button>
          <button className='bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl text-xl'>
            Code Question
          </button>
        </form>
      </div>
    </>
  );
};

export default QuestionBankScreen;
