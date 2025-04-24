import React from 'react'
import img2 from '../Assets/c-plus-plus-4096.png';
import { Navigate, useNavigate } from 'react-router-dom';

const StuCompRndDate = () => {
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
                 Competitions Round Dates
                </a>
              </li>
            </ul>
            
            {/* Logout Button */}
            <button onClick={() => navigate(-1)} className='bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
              Back
            </button>
          </nav>
    
          {/* Form */}
          <div className='w-full h-screen bg-gray-800 flex justify-center items-center px-4'>
            <form className="bg-gray-900 p-20 rounded-lg shadow-lg w-full max-w-md"> {/* Reduced form padding and width */}
              <h1 className="text-2xl font-semibold text-center text-amber-50 mb-4">Rounds Date</h1>
              
              {/* ROW 1 */}
              <div className='flex p-2 gap-1'> {/* Adjusted gap-1 */}
                <div className="mb-1 flex">
                  <div className="w-36 h-48 bg-gray-700 rounded-2xl flex flex-col justify-between items-center p-4"> {/* Reduced card size and padding */}
                    {/* Title Section */}
                    <div className="w-24 h-5 rounded-4xl bg-black flex justify-center items-center mt-2"> {/* Reduced width and height */}
                      <h1 className="text-amber-50 text-xs">MCQ's</h1> {/* Reduced text size */}
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-amber-50 text-lg text-center mt-4 mb-2"> {/* Reduced font size */}
                      20-Oct-2024
                    </h1>
                    <h1 className="text-amber-50 text-xl text-center mb-2"> {/* Reduced font size */}
                      Round 1
                    </h1>

                    {/* Button */}
                    <button
                    onClick={()=>navigate("/studentcompmcq")} className="w-full h-8 bg-amber-400 border-2 hover:bg-amber-700 border-black rounded-2xl text-black font-semibold">
                      Next
                    </button>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-36 h-48 bg-gray-700 rounded-2xl flex flex-col justify-between items-center p-4"> {/* Reduced card size and padding */}
                    {/* Title Section */}
                    <div className="w-34 h-5 rounded-4xl bg-black flex justify-center items-center mt-2">
                      <h1 className="text-amber-50 text-sm ">Speed Programming</h1>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-amber-50 text-lg text-center mt-4 mb-2">
                      12-Oct-2024
                    </h1>
                    <h1 className="text-amber-50 text-xl text-center mb-2">
                      Round 2
                    </h1>

                    {/* Button */}
                    <button
                    onClick={()=>navigate("/compsp")}
                    className="w-full h-8 bg-amber-400 border-2 hover:bg-amber-700 border-black rounded-2xl text-black font-semibold">
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* ROW 2 - Copy of the first row */}
              <div className='flex p-2 gap-1'> {/* Adjusted gap-1 */}
                <div className="mb-1 flex">
                  <div className="w-36 h-48 bg-gray-700 rounded-2xl flex flex-col justify-between items-center p-4"> {/* Reduced card size and padding */}
                    {/* Title Section */}
                    <div className="w-24 h-5 rounded-4xl bg-black flex justify-center items-center mt-2">
                      <h1 className="text-amber-50 text-xs">Shuffle</h1>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-amber-50 text-lg text-center mt-4 mb-2">
                      8-Oct-2024
                    </h1>
                    <h1 className="text-amber-50 text-xl text-center mb-2">
                      Round 3
                    </h1>

                    {/* Button */}
                    <button
                    onClick={()=>navigate("/compshuffle")}
                    className="w-full h-8 bg-amber-400 hover:bg-amber-700 border-2 border-black rounded-2xl text-black font-semibold">
                      Next
                    </button>
                  </div>
                </div>

                <div className="mb-1 flex">
                  <div className="w-36 h-48 bg-red-600 rounded-2xl flex flex-col justify-between items-center p-4"> {/* Reduced card size and padding */}
                    {/* Title Section */}
                    <div className="w-24 h-5 rounded-4xl bg-black flex justify-center items-center mt-2">
                      <h1 className="text-amber-50 text-xs">Final MCQ's</h1>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-amber-50 text-lg text-center mt-4 mb-2">
                      20-Oct-2024
                    </h1>
                    <h1 className="text-amber-50 text-xl text-center mb-2">
                      Final Round
                    </h1>

                    {/* Button */}
                    <button 
                    onClick={()=> navigate("/studentcompfrnddate")}
                    className="w-full h-8 bg-gray-500 border-2 hover:bg-gray-700 border-black rounded-2xl text-black font-semibold">
                      Locked
                    </button>
                    
                  </div>
                </div>
              </div>
              
              {/* Start Tournament Button */}
              <button
              onClick={()=>navigate("/studentcompmcq")}
              className="w-full h-8 mt-2 ml-2 bg-amber-400 border-2 hover:bg-amber-700 border-black rounded-2xl text-black font-semibold">
                Start Tournament
              </button>
              <button
              onClick={()=>navigate(-1)}
              className="w-20 h-8 mt-2 ml-2 bg-gray-400 border-2 hover:bg-gray-700 border-black rounded-md text-black font-semibold">
                Back
              </button>
            </form>
          </div>
        </>
    )
}

export default StuCompRndDate;
