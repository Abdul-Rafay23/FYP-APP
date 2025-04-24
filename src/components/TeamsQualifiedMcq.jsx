import React from 'react'
import img2 from '../Assets/c-plus-plus-4096.png';

const TeamsQualifiedMcq = () => {
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
                  Teams Qualified Competitions 2024
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
              <h1 className="text-2xl font-semibold text-center text-amber-50 mb-4">MCQ Result</h1>

              {/* ROW */}

              
              <div className=' flex gap-6'>
                <h1 className=' text-xl text-amber-50 font-serif mb-4'>Teams Qualified :</h1>
              </div>
                <div className=' w-38 h-8 p-1 ml-27 rounded-2xl mb-2 bg-amber-400 flex justify-center'>
                    <h1 className=' text-md text-amber-50 font-extrabold'>TEAM A</h1>
                </div>
                <div className=' w-38 h-8 p-1 ml-27 rounded-2xl mb-2 bg-amber-400 flex justify-center'>
                    <h1 className=' text-md text-amber-50 font-extrabold'>TEAM B</h1>
                </div>
                <div className=' w-38 h-8 p-1 ml-27 rounded-2xl mb-2 bg-amber-400 flex justify-center'>
                    <h1 className=' text-md text-amber-50 font-extrabold'>TEAM C</h1>
                </div>
                <div className=' w-38 h-8 p-1 ml-27 rounded-2xl mb-2 bg-amber-400 flex justify-center'>
                    <h1 className=' text-md text-amber-50 font-extrabold'>TEAM E</h1>
                </div>
                <div className=' w-38 h-8 p-1 ml-27 rounded-2xl mb-2 bg-amber-400 flex justify-center'>
                    <h1 className=' text-md text-amber-50 font-extrabold'>TEAM D</h1>
                </div>
                {/* Next ROW */}


                <div className=' flex gap-6'>
                <h1 className=' text-xl text-amber-50 font-serif mb-4'>Teams Disqualified :</h1>
              </div>

              <div className=' w-38 h-8 p-1 ml-27 rounded-2xl mb-2 bg-amber-400 flex justify-center'>
                    <h1 className=' text-md text-amber-50 font-extrabold'>TEAM E</h1>
                </div>
                <div className=' w-38 h-8 p-1 ml-27 rounded-2xl mb-2 bg-amber-400 flex justify-center'>
                    <h1 className=' text-md text-amber-50 font-extrabold'>TEAM F</h1>
                </div>
                <div className=' w-38 h-8 p-1 ml-27 rounded-2xl mb-2 bg-amber-400 flex justify-center'>
                    <h1 className=' text-md text-amber-50 font-extrabold'>TEAM G</h1>
                </div>
                <div className=' w-38 h-8 p-1 ml-27 rounded-2xl mb-2 bg-amber-400 flex justify-center'>
                    <h1 className=' text-md text-amber-50 font-extrabold'>TEAM H</h1>
                </div>
                <div className=' w-38 h-8 p-1 ml-27 rounded-2xl mb-2 bg-amber-400 flex justify-center'>
                    <h1 className=' text-md text-amber-50 font-extrabold'>TEAM I</h1>
                </div>


             
            



            </form>
          </div>
        </>
    )
}

export default TeamsQualifiedMcq;
