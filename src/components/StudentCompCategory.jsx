import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const StudentCompCategory = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className='w-full h-screen bg-gray-800 flex justify-center items-center px-4'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">
            Competition Categories
          </h1>

          <div className='flex gap-6 mb-8'>
            {/* Enrolled Competitions Card */}
            <div className='h-72 w-58 rounded-2xl bg-gray-700 border-2 border-amber-400'>
              <h1 className='flex justify-center pt-16 pl-8 font-bold text-amber-50 text-2xl'>
                Enrolled Competitions
              </h1>
              <button
                type="button"
                className='h-10 w-48 bg-amber-400 border-2 border-gray-700 rounded-md mt-24 ml-2'
                onClick={() => navigate("/studentenrolledcomp")}
              >
                <h1 className='font-bold'>Next</h1>
              </button>
            </div>

            {/* Upcoming Competitions Card */}
            <div className='h-72 w-58 rounded-2xl bg-gray-700 border-2 border-amber-400'>
              <h1 className='flex justify-center pt-16 pl-8 font-bold text-amber-50 text-2xl'>
                Upcoming Competitions
              </h1>
              <button
                type="button"
                className='h-10 w-48 bg-amber-400 border-2 border-gray-700 rounded-md mt-24 ml-2'
                onClick={() => navigate("/studentcomp")}
              >
                <h1 className='font-bold'>Next</h1>
              </button>
            </div>
          </div>

          {/* Back Button */}
          <div className='flex gap-6'>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
              className='h-10 w-48 bg-gray-400 border-2 border-amber-700 rounded-md'
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentCompCategory;
