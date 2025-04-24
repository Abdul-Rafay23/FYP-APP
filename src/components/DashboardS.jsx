import React, { useState } from 'react';
import img from '../Assets/Black-Transparent.png'; // import the image
import img10 from '../Assets/golden-winners-cup-b.png';
import img20 from '../Assets/c-plus-plus-4096.png';
import img30 from '../Assets/Expertise.png';
import img40 from '../Assets/Leaderboard.png';
import img50 from '../Assets/QBank.png';
import img60 from '../Assets/Quiz.png';
import img70 from '../Assets/764.png';
import { CgLoadbar } from "react-icons/cg";
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DashboardS = () => {
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
            <Link className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' to="/homeS">Home</Link>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='studentcomp'>
              Competitions
            </a>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='leaderboard'>
              Leaderboard
            </a>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='stutask'>
              Tasks
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
            <Link className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' to="/homes">Home</Link>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='competitionsS'>
              Competitions
            </a>
          </li>
          <li>
            <a className='hover:bg-amber-400 p-2 rounded-lg transition duration-300' href='leaderboard'>
              Leaderboard
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className='w-full h-full flex flex-wrap justify-center p-4 bg-gray-700 gap-4'>
        {/* First Row of Cards */}


        <div className=' bg-gray-900 w-full h-40  p-4 rounded-md'>
          <div className=' flex'>
        <img className='w-20 h-20 sm:w-18 sm:h-18 rounded-full border-4 border-amber-400' src={img70} alt="Person" />
        <h1 className=' text-amber-50 text-4xl font-bold p-4 ml-2'>Welcome, Student</h1>
        <h4 className=' text-amber-50 text-xl font-bold p-4 ml-2'>Student@gmail.com</h4>

        </div>
        <div className=' flex'>
        <h1 className=' text-2xl text-amber-50 p-2 font-bold'>Level 1:</h1>
        <CgLoadbar className="text-6xl" />
        <CgLoadbar className="text-6xl" />
        <CgLoadbar className="text-6xl" />
        <CgLoadbar className="text-6xl" />
        <CgLoadbar className="text-6xl" />
        <CgLoadbar className="text-6xl" />
        <CgLoadbar className="text-6xl" />
        <CgLoadbar className="text-6xl" /> 
        <CgLoadbar className="text-6xl" />
        </div>
        </div>



        <div className='h-80 w-80 sm:w-96 p-4 border-purple-950 rounded-2xl bg-gray-900'>
          <h1 className='text-center text-amber-50 text-2xl font-extrabold font-serif'>Competition</h1>
          <img className='w-60 h-55 p-1 mx-auto' src={img10} alt="Competition" />
          <button
            onClick={() => navigate("/studentcompcategory")}
            className='bg-amber-500 text-white font-semibold w-40 p-2 mx-auto rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
            Competitions
          </button>
        </div>

        <div className='h-80 w-80 sm:w-96 p-4 border-purple-950 rounded-2xl bg-gray-900'>
          <h1 className='text-center text-amber-50 text-2xl font-extrabold font-serif'>Leaderboard</h1>
          <img className='w-60 h-55 p-1 mx-auto' src={img40} alt="Leaderboard" />
          <button
            onClick={() => navigate("/leaderboard")}
            className='bg-amber-500 text-white font-semibold w-40 p-2 mx-auto rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
            Leaderboard
          </button>
        </div>

        <div className='h-80 w-80 sm:w-96 p-4 border-purple-950 rounded-2xl bg-gray-900'>
          <h1 className='text-center text-amber-50 text-2xl font-extrabold font-serif'>Tasks</h1>
          <img className='w-60 h-55 p-1 mx-auto' src={img20} alt="Tasks" />
          <button
            onClick={() => navigate("/stutask")}
            className='bg-amber-500 text-white font-semibold w-40 p-2 mx-auto rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
            Tasks
          </button>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className='w-full h-full flex flex-wrap justify-center p-4 bg-gray-700 gap-4'>
        <div className='h-80 w-80 sm:w-96 p-4 border-purple-950 rounded-2xl bg-gray-900'>
          <h1 className='text-center text-amber-50 text-2xl font-extrabold font-serif'>History</h1>
          <img className='w-60 h-55 p-1 mx-auto' src={img30} alt="Expertise" />
          <button
            onClick={() => navigate("/history")}
            className='bg-amber-500 text-white font-semibold w-40 p-2 mx-auto rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
            History
          </button>
        </div>

      </div>
    </>
  );
};

export default DashboardS;
