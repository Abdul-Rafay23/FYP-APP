import React from 'react'
import img2 from '../Assets/c-plus-plus-4096.png';
const StudentUpcomComp = () => {
    return (
        <>
            {/* APPLY NOW BUTTON WITH ONLY MOVE TO REGISTRATION */}

          <nav className='bg-gray-900 p-4 flex items-center justify-between'>
            <div className='flex items-center'>
              <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>Programming Community</h1>
            </div>
    
            {/* Navigation Menu */}
            <ul className='hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold'>
              <li>
                <a className='hover:bg-amber-400 rounded-lg transition duration-300 mr-50 text-3xl'>
                  Upcoming Competitions
                </a>
              </li>
            </ul>
            
            {/* Logout Button */}
            <button onClick={() => navigate(-1)} className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
              Back
            </button>
          </nav>
    
          {/* Form */}
          <div className='w-full h-screen
           bg-gray-800 flex justify-center items-center px-4'>
            <form className="bg-gray-900 p-8  rounded-lg shadow-lg w-full max-w-lg " >
              <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Upcoming Competition</h1>
    
             <div className=' flex p-6 gap-4'>
              <div className="mb-4 flex ">
                <div className="w-48 h-64 bg-gray-700 rounded-2xl flex flex-col justify-between items-center p-6">
                    {/* Title Section */}
                <div className="w-30 h-5 rounded-4xl bg-black flex justify-center items-center mt-4">
                <h1 className="text-amber-50 text-sm">Programing</h1>
                </div>

                {/* Main Heading */}
                <h1 className="text-amber-50 text-2xl text-center mt-6 mb-8">
                
                 Web Development
                </h1>

                {/* Button */}
                <button className="w-full h-8 bg-gray-500 border-2 border-black rounded-2xl text-black font-semibold">
                   Apply Now
                 </button>
                  </div>
                </div>


                <div className="mb-4 flex ">
                <div className="w-48 h-64 bg-gray-700 rounded-2xl flex flex-col justify-between items-center p-6">
                    {/* Title Section */}
                <div className="w-30 h-5 rounded-4xl bg-black flex justify-center items-center mt-4">
                <h1 className="text-amber-50 text-sm">Programing</h1>
                </div>

                {/* Main Heading */}
                <h1 className="text-amber-50 text-2xl text-center mt-6 mb-8">
                 React
                </h1>

                {/* Button */}
                <button className="w-full h-8 bg-amber-400 border-2 border-black rounded-2xl text-black font-semibold">
                   Enrolled
                 </button>
                  </div>
                </div>


                </div>
                {/* NEXT ROW */}
                <div className=' ml-6 gap-4 flex'>
                <div className="w-48 h-64 bg-gray-700 rounded-2xl flex flex-col justify-between items-center p-6">
                    {/* Title Section */}
                <div className="w-30 h-5 rounded-4xl bg-black flex justify-center items-center mt-4">
                <h1 className="text-amber-50 text-sm">Programing</h1>
                </div>

                {/* Main Heading */}
                <h1 className="text-amber-50 text-2xl text-center mt-6 mb-8">
                 React
                </h1>

                {/* Button */}
                <button className="w-full h-8 bg-amber-400 border-2 border-black rounded-2xl text-black font-semibold">
                   Enrolled
                 </button>
                  </div>

                  <div className="w-48 h-64 bg-gray-800 rounded-2xl flex flex-col justify-between items-center p-6">
                    {/* Title Section */}
                
                <div className="w-30 h-5 rounded-4xl bg-black flex justify-center items-center mt-4">
                <h1 className="text-amber-50 text-sm">Programing</h1>
                </div>

                {/* Main Heading */}
                <h1 className="text-amber-50 text-2xl text-center mt-6 mb-8">
                 Java
                </h1>

                {/* Button */}
                <button className="w-full h-8 bg-black border-2 border-white rounded-2xl text-amber-50 font-semibold">
                   Locked
                 </button>
                  </div>
                </div>
            </form>
          </div>
        </>
  )
}

export default StudentUpcomComp;