import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskRound = () => {
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
              Task Round
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
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Select Category</h1>


     

          {/* Leaderboard Button for Players */}
         

          {/* Your Rank Section */}
          <div className="flex pb-4 mt-8">
            <button 
            onClick={"/"}
            className=' w-screen h-16 bg-amber-400 border-2 border-amber-700 rounded-2xl flex justify-center items-center
            hover:bg-amber-700'>
            <h1 className=' font-bold text-xl'>MCQ</h1>
            </button>
          </div>
          <div className="flex pb-4 mt-8">
          
            <button
              onClick={"/"}
            className=' w-screen h-16 bg-amber-400 border-2 border-amber-700 rounded-2xl flex justify-center items-center
             hover:bg-amber-700'>
            <h1 className=' font-bold text-xl'>Short Question/ Code Question</h1>
            </button>
          </div>

        </form>
      </div>
    </>
  );
}

export default TaskRound;
