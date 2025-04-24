import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompSP = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-gray-900 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-extrabold text-amber-400 font-serif">Programming Community</h1>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold">
          <li>
            <a className="hover:bg-amber-400 rounded-lg transition duration-300 text-3xl">
              Competition Speed Programming
            </a>
          </li>
        </ul>

        {/* Logout Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
        >
          Back
        </button>
      </nav>

      <div className="w-screen h-screen bg-gray-800 flex justify-center items-center p-4">
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Speed Programming</h1>

          <div className="mb-4 flex justify-center">
            <h1 className="text-2xl font-semibold text-center text-amber-50 mb-4">Total Questions 20</h1>
          </div>

          <div className="mb-4 flex justify-center">
            <h1 className="text-2xl font-semibold text-center text-amber-50 mb-4">1/20</h1>
          </div>

          <div className="mb-4 h-10 w-full rounded-2xl border-8 border-amber-400 bg-amber-400 flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-center text-amber-50">Questions</h1>
          </div>

          <div className="mb-4 h-20 w-full rounded-2xl border-8 border-amber-400 bg-amber-400 flex">
            <h1 className="text-2xl font-semibold text-center text-amber-50">Q1. </h1>
          </div>

          <div className="mb-2 flex p-4 bg-gray-600 w-full h-32 rounded-2xl">
            <h1 className="text-24 text-amber-50 font-bold">Answer :</h1>
          </div>

          <div className="mb-1 flex justify-center p-4 w-full h-10 rounded-2xl">
            <h1 className='text-2xl text-amber-50 font-extrabold'>Time Remaining:</h1>
          </div>

          <div className="mb-4 flex justify-center p-4 w-full h-20 rounded-2xl">
            <h1 className='text-4xl text-amber-50 font-extrabold'>00:01:03</h1>
          </div>

          <div className="mb-8 flex justify-center p-4 w-full h-20 rounded-2xl">
            <button
              onClick={() => navigate('/compshuffle')}
              type="submit"
              className="w-full sm:w-1/2 bg-amber-400 text-white py-3 rounded-4xl hover:bg-amber-600 transition ml-2"
            >
              Submit
            </button>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="w-full sm:w-1/2 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition"
            >
              Back
            </button>
            <button
              onClick={() => navigate('/compshuffle')}
              type="submit"
              className="w-full sm:w-1/2 bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition ml-2"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CompSP;
