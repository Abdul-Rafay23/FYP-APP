import React, { useState } from 'react';
import img from '../Assets/Black-Transparent.png'; // import the image
import img1 from '../Assets/golden-winners-cup-b.png';
import img2 from '../Assets/c-plus-plus-4096.png';
import img3 from '../Assets/Expertise.png';
import img4 from '../Assets/Leaderboard.png';
import img5 from '../Assets/QBank.png';
import img6 from '../Assets/Quiz.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DashboardE = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        {/* Center Section - Logo and Title */}
        <div className='flex items-center'>
          <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>Programming Community</h1>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className='sm:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className='text-white'>
            <FaBars size={24} />
          </button>
        </div>

        {/* Navigation Menu (Desktop) */}
        <ul className='hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold'>
          <li>
            <Link className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' to="/home">Home</Link>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='competitions'>
              Competitions
            </a>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='leaderboard'>
              Leaderboard
            </a>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='expertise'>
              Expertise
            </a>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='questionbank'>
              Question Bank
            </a>
          </li>
        </ul>

        {/* Logout Button */}
        <button
          onClick={() => navigate("/logout")}
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
          Logout
        </button>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} bg-gray-900 p-4`}>
        <ul className='flex flex-col gap-4 text-lg text-blue-50 font-bold'>
          <li>
            <Link className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' to="/home">Home</Link>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='competitions'>
              Competitions
            </a>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='leaderboard'>
              Leaderboard
            </a>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='addexpertisesub'>
              Expertise
            </a>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='questionbank'>
              Question Bank
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className='w-full h-full flex flex-wrap justify-center p-4 bg-gray-700 gap-4'>
        {/* First Row of Cards */}
        <div className='h-80 w-80 sm:w-96 p-4 border-purple-950 rounded-2xl bg-gray-900'>
          <h1 className='text-center text-amber-50 text-2xl font-extrabold font-serif'>Make Competition</h1>
          <img className='w-60 h-55 p-1 mx-auto' src={img1} alt="Competition" />
          <button
            onClick={() => navigate("/competitions")}
            className='bg-amber-500 text-white font-semibold w-40 p-2 mx-auto rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
            Competitions
          </button>
        </div>

        <div className='h-80 w-80 sm:w-96 p-4 border-purple-950 rounded-2xl bg-gray-900'>
          <h1 className='text-center text-amber-50 text-2xl font-extrabold font-serif'>Leaderboard</h1>
          <img className='w-60 h-55 p-1 mx-auto' src={img4} alt="Leaderboard" />
          <button
            onClick={() => navigate("/leaderboard")}
            className='bg-amber-500 text-white font-semibold w-40 p-2 mx-auto rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
            Leaderboard
          </button>
        </div>

        <div className='h-80 w-80 sm:w-96 p-4 border-purple-950 rounded-2xl bg-gray-900'>
          <h1 className='text-center text-amber-50 text-2xl font-extrabold font-serif'>Tasks</h1>
          <img className='w-60 h-55 p-1 mx-auto' src={img2} alt="Tasks" />
          <button
            onClick={() => navigate("/tasks")}
            className='bg-amber-500 text-white font-semibold w-40 p-2 mx-auto rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
            Tasks
          </button>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className='w-full h-full flex flex-wrap justify-center p-4 bg-gray-700 gap-4'>
        <div className='h-80 w-80 sm:w-96 p-4 border-purple-950 rounded-2xl bg-gray-900'>
          <h1 className='text-center text-amber-50 text-2xl font-extrabold font-serif'>Add Expertise</h1>
          <img className='w-60 h-55 p-1 mx-auto' src={img3} alt="Expertise" />
          <button
            onClick={() => navigate("/addexpertisesub")}
            className='bg-amber-500 text-white font-semibold w-40 p-2 mx-auto rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
            Expertise
          </button>
        </div>

        {/* Making Competition and Quiz smaller and side by side */}
        <div className='h-80 w-64 sm:w-72 p-4 border-purple-950 rounded-2xl bg-gray-900'>
          <h1 className='text-center text-amber-50 text-2xl font-extrabold font-serif'>Make Task</h1>
          <img className='w-48 h-48 p-1 mx-auto' src={img6} alt="Make Quiz" />
          <button
            onClick={() => navigate("/makequiz")}
            className='bg-amber-500 text-white font-semibold w-40 p-2 mx-auto rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
            Make Task
          </button>
        </div>

        <div className='h-80 w-64 sm:w-72 p-4 border-purple-950 rounded-2xl bg-gray-900'>
          <h1 className='text-center text-amber-50 text-2xl font-extrabold font-serif'>Question Bank</h1>
          <img className='w-48 h-48 p-1 mx-auto' src={img5} alt="Question Bank" />
          <button
            onClick={() => navigate("/questionbank")}
            className='bg-amber-500 text-white font-semibold w-40 py-2 px-6 mx-auto rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
            Bank
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardE;
