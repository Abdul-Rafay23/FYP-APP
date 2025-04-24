import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentComp = () => {
  const [competitions, setCompetitions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8082/api/Competition/GetAllCompetitions')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch competitions');
        }
        return response.json();
      })
      .then(data => {
        setCompetitions(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>
          Programming Community
        </h1>
        <ul className='hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold'>
          <li>
            <span className='hover:bg-amber-400 rounded-lg transition duration-300 mr-50 text-3xl'>
              Student Competitions
            </span>
          </li>
        </ul>
        <button
          onClick={() => navigate(-1)}
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'
        >
          Back
        </button>
      </nav>

      {/* Main Content */}
      <div className='w-full min-h-screen bg-gray-800 flex justify-center items-center px-4'>
        <form className='bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-5xl'>
          <h1 className='text-3xl font-semibold text-center text-amber-50 mb-6'>
            Competitions
          </h1>

          {/* Competition Cards */}
          <div className='flex flex-wrap justify-center gap-6'>
            {competitions.map((comp, index) => (
              <div
                key={index}
                className='w-48 h-64 bg-gray-700 rounded-2xl flex flex-col justify-between items-center p-6'
              >
                {/* Category */}
                <div className='w-30 h-5 rounded-4xl bg-black flex justify-center items-center mt-4'>
                  <h1 className='text-amber-50 text-sm'>
                    {comp.category || 'Programming'}
                  </h1>
                </div>

                {/* Title */}
                <h1 className='text-amber-50 text-2xl text-center mt-6 mb-8'>
                  {comp.title || comp.name}
                </h1>

                {/* Apply Button */}
                <button
                  type="button"
                  onClick={() => {
                    sessionStorage.setItem('selectedCompetitionId', comp.id); // <- Store competitionId
                    navigate('/studentcompreg');
                  }}
                  className='w-full h-10 bg-amber-400 border-2 hover:bg-amber-700 border-black rounded-2xl text-black font-semibold'
                >
                  Apply now
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Back Button */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className='w-full h-10 mt-6 bg-gray-400 border-2 hover:bg-gray-700 border-black rounded-2xl text-black font-semibold'
          >
            Back
          </button>
        </form>
      </div>
    </>
  );
};

export default StudentComp;
