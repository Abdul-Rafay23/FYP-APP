import React from 'react';
import { useNavigate } from 'react-router-dom';

const MCQBank = () => {
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
              Task MCQ
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
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">MCQ</h1>
            <div className=' mt-2 mb-2 '>
                <h1 className=' text-xl text-amber-50 font-bold'>Question Of:</h1>
            </div>
            <div className=' mb-2 flex justify-center '>
                <input className=' p-4 border-2 border-amber-400 bg-gray-400 text-amber-50 hover:bg-gray-600 w-screen h-12 rounded-2xl'
                type='text'
                placeholder='Type of Question'
                ></input>
            </div>
            <div className=' mb-2 '>
                <h1 className=' text-xl text-amber-50 font-bold'>Level :</h1>
            </div>
            <div className='mb-2 flex justify-center'>
            <select
            className=' border-2 border-amber-400 bg-gray-400 text-amber-50 hover:bg-gray-600 w-screen h-12 rounded-2xl'
             defaultValue=""
            >
         <option value="" disabled>Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
         </select>
            </div>
            <div className='  mb-2 '>
                <h1 className=' text-xl text-amber-50 font-bold'>Add Questions:</h1>
            </div>
            <div className=' mb-2 flex justify-center '>
                <input className=' p-4 border-2 border-amber-400 bg-gray-400 text-amber-50 hover:bg-gray-600 w-screen h-12 rounded-2xl'
                type='text'
                placeholder='Type Question'
                ></input>
            </div>

            <div className='mb-2 flex justify-center '>
            <button
            className=' bg-amber-400 border-2 border-amber-700 hover:bg-amber-700 rounded-xl w-48 h-12 flex justify-center items-center'
            >
                <h1 className=' text-xl text-amber-50'>Add Questions</h1>
            </button>    
            </div>
            <div className=' mb-2 '>
                <h1 className=' text-xl text-amber-50 font-bold'>Add Option:</h1>
            </div>
            <div className=' mb-2 flex  '>
                <textarea className=' w-60 h-18 border-2 border-amber-400 bg-gray-400 rounded-2xl p-4'>
                </textarea>
                <button
            className=' ml-6 bg-amber-400 border-2 border-amber-700 hover:bg-amber-700 rounded-xl w-48 h-12 flex justify-center items-center'
            >
                <h1 className=' text-xl text-amber-50'>Correct Options</h1>
            </button>   
            </div>
            <div className=' mb-2 flex  '>
                <textarea className=' w-60 h-18 border-2 border-amber-400 bg-gray-400 rounded-2xl p-4'>
                </textarea>
                <button
            className=' ml-6 bg-amber-400 border-2 border-amber-700 hover:bg-amber-700 rounded-xl w-48 h-12 flex justify-center items-center'
            >
                <h1 className=' text-xl text-amber-50'>Wrong Options</h1>
            </button>   
            </div>
            
        


            <div className='  mb-2 flex justify-center '>
            <button
            className=' bg-amber-400 border-2 border-amber-700 hover:bg-amber-700 rounded-xl w-30 h-12 flex justify-center items-center'
            >
                <h1 className=' text-xl text-amber-50'>Back</h1>
            </button> 
            <button
            className=' gap-6 ml-24 bg-amber-400 border-2 border-amber-700 hover:bg-amber-700 rounded-xl w-30 h-12 flex justify-center items-center'
            >
                <h1 className=' text-xl text-amber-50'>Submit</h1>
            </button>   
            </div>
        </form>
      </div>
    </>
  );
}

export default MCQBank;
