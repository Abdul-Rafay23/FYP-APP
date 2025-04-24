import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MakeComp = () => {
  const navigate = useNavigate();

  const [level, setLevel] = useState('');
  const [maxLevel, setMaxLevel] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [password, setPassword] = useState('');
  const [rounds, setRounds] = useState('');
  const [UserId, setUserId] = useState('');

  const handleSaveCompetition = async (event) => {
    event.preventDefault();

    if (!level || !title || !year || !maxLevel || !password || !rounds) {
      alert('Please fill in all fields.');
      return;
    }

    const newCompetition = {
      competitionId: 0,
      title: title,
      year: parseInt(year),
      minLevel: parseInt(level),
      maxLevel: parseInt(maxLevel),
      password: password,
      rounds: parseInt(rounds),
      userId: 1 // Replace with dynamic user ID if available
    };

    try {
      const response = await axios.post('http://localhost:8082/api/Competition/MakeCompetition', newCompetition);
      if (response.status === 201) {
        alert('Competition saved successfully!');
        navigate("/addrounds");
      } else {
        alert('Error saving competition: ' + response.statusText);
      }
    } catch (error) {
      console.error('Error saving competition:', error);
      alert('There was an error saving the competition.');
    }
  };

  return (
    <>
      <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>Programming Community</h1>
        <ul className='hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold'>
          <li><span className='hover:bg-amber-400 rounded-lg transition duration-300 text-3xl'>Make Competition</span></li>
        </ul>
        <button
          onClick={() => navigate(-1)}
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 transition duration-300'
        >
          Back
        </button>
      </nav>

      <div className='w-screen h-screen bg-gray-800 flex justify-center items-center'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg" onSubmit={handleSaveCompetition}>
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Make Competition</h1>

          {/* Title */}
          <div className='mb-2'>
            <label htmlFor="title" className="block text-xl text-amber-50 mb-2">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              placeholder="Title"
            />
          </div>

          {/* Year */}
          <div className='mb-2'>
            <label htmlFor="year" className="block text-xl text-amber-50 mb-2">Year:</label>
            <input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              placeholder="Year"
            />
          </div>

          {/* Min Level */}
          <div className="mb-2">
            <label className="block text-xl text-amber-50 mb-2">Min Level:</label>
            <select
              id="minLevel"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-black text-white"
            >
              <option value="" disabled>Min Level</option>
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
            </select>
          </div>

          {/* Max Level */}
          <div className="mb-2">
            <label htmlFor="maxLevel" className="block text-xl text-amber-50 mb-2">Max Level:</label>
            <select
              id="maxLevel"
              value={maxLevel}
              onChange={(e) => setMaxLevel(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md bg-black text-white"
            >
              <option value="" disabled>Max Level</option>
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
            </select>
          </div>

          {/* Password */}
          <div className="mb-2">
            <label htmlFor="password" className="block text-xl text-amber-50 mb-2">Password:</label>
            <input
              id="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              placeholder="Password"
            />
          </div>

          {/* Rounds */}
          <div className="mb-4">
            <label htmlFor="rounds" className="block text-xl text-amber-50 mb-2">Rounds:</label>
            <input
              id="rounds"
              type="number"
              value={rounds}
              onChange={(e) => setRounds(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              placeholder="Rounds"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-1/2 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition"
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MakeComp;
