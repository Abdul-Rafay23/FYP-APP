import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CiFilter } from "react-icons/ci";

const Questionbank = () => {
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
              Question Bank
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
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Question Bank</h1>





          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row justify-evenly gap-4 pb-12">
            <button
              type="button"
              onClick={()=> navigate('/questionbankadd')}
              className="w-full sm:w-1/2 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition"
            >
              Add New
            </button>
            <button
              onClick={() => navigate("viewallquestions")}
              type="submit"
              className="w-full sm:w-1/2 bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition"
            >
              View All
            </button>
          </div>

          {/* Back Button */}
          <div>
            <button
              onClick={() => navigate("/home")}
              type="submit"
              className="w-full bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Questionbank;
