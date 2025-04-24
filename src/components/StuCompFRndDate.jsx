import React from 'react'
import img2 from '../Assets/c-plus-plus-4096.png';
import { Navigate, useNavigate } from 'react-router-dom';

const StuCompFRndDate = () => {
  const navigate = useNavigate();
    return (
        <>
          <nav className='bg-gray-900 p-3 flex items-center justify-between'>
            <div className='flex items-center'>
              <h1 className='text-xl font-extrabold text-amber-400 font-serif'>Programming Community</h1>
            </div>
    
            {/* Navigation Menu */}
            <ul className='hidden sm:flex gap-4 items-center text-lg text-blue-50 font-bold'>
              <li>
                <a className='hover:bg-amber-400 rounded-lg transition duration-300 mr-50 text-2xl'>
                Competitions Final Round Dates
                </a>
              </li>
            </ul>
            
            {/* Logout Button */}
            <button onClick={() => navigate(-1)} className='bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
              Back
            </button>
          </nav>
    
          {/* Form */}
          <div className='w-full h-screen bg-gray-800 flex justify-center items-center '>
            <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"> {/* Reduced form padding and width */}
              <h1 className="text-2xl font-semibold text-center text-amber-50 mb-4">Final Rounds Date</h1>

              {/* ROW */}

              
              <div className=' flex gap-6'>
              <div className=' w-52 h-60 bg-gray-600 rounded-2xl p-4 text-center justify-center '>
                <div className=' w-24 h-6 ml-7 rounded-2xl bg-black flex  justify-center'>
                    <h1 className=' text-amber-50 font-bold'>MCQ's</h1>
                </div>
                <h1 className=' mt-10 text-md font-bold'>Date : 27-Oct-2024</h1>
                <h1 className=' text-3xl font-bold'>Round 1</h1>
              </div>
              

              <div className=' w-52 h-60 bg-gray-600 rounded-2xl p-4 text-center justify-center '>
                <div className=' w-24 h-6 ml-7 rounded-2xl bg-black flex  justify-center'>
                    <h1 className=' text-amber-50 font-bold'>Rapid Fire</h1>
                </div>
                <h1 className=' mt-10 text-md font-bold'>Date : 30-Oct-2024</h1>
                <h1 className=' text-3xl font-bold'>Round 2</h1>
              </div>
              </div>


                {/* Next ROW */}


              <div className=' flex gap-2 mt-4 mb-8'>
              <div className=' w-45 h-60 bg-gray-600 rounded-2xl p-4 text-center justify-center '>
                <div className=' w-24 h-6 ml-7 rounded-2xl bg-black flex  justify-center'>
                    <h1 className=' text-amber-50 font-bold'>Buzzer</h1>
                </div>
                <h1 className=' mt-10 text-md font-bold'>Date : 3-Nov-2024</h1>
                <h1 className=' text-3xl font-bold'>Round 3</h1>
              </div>
             


              
              </div>
              <button
              onClick={()=>navigate("/studentcompmcq")}
              className=' w-40 h-10 rounded-2xl justify-center ml-28 font-bold hover:bg-amber-700  bg-amber-400 mb-4'>
                Start Tournament
              </button>
              <div>
              <button
              onClick={()=>navigate(-1)}
              className=' w-20 h-7 rounded-2xl bg-gray-500 hover:bg-gray-700 font-bold'>
                Back
              </button>
              </div>
            </form>
          </div>
        </>
    )
}

export default StuCompFRndDate;
