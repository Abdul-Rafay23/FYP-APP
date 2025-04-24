import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MAX_ROUNDS = 4;

const AddRounds = () => {
  const navigate = useNavigate();
  const [rounds, setRounds] = useState([]);

  const handleAddRound = (type) => {
    if (rounds.length >= MAX_ROUNDS) {
      alert('You can only add up to 4 rounds.');
      return;
    }

    
    const newRound = {
      id: rounds.length + 1,
      type,
      date: new Date().toISOString().split('T')[0], // current date
    };

    setRounds([...rounds, newRound]);
  };

  return (
    <>
      <nav className="bg-gray-900 p-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-amber-400 font-serif">Programming Community</h1>
        <ul className="hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold">
          <li>
            <span className="hover:bg-amber-400 rounded-lg transition duration-300 text-3xl">
              Round Type
            </span>
          </li>
        </ul>
        <button
          onClick={() => navigate(-1)}
          className="bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 transition"
        >
          Back
        </button>
      </nav>

      <div className="w-screen h-screen bg-gray-800 flex justify-center items-center p-4">
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Rounds Type</h1>

          <div className='mb-4 flex justify-center'>
            <h1 className='text-xl font-bold text-amber-50'>
              Total Rounds: {rounds.length}/{MAX_ROUNDS}
            </h1>
          </div>

          {rounds.map((round, index) => (
            <div key={index} className='mb-2 text-white'>
              <p>{index + 1}. {round.type} - {round.date}</p>
            </div>
          ))}

          {/* Round Types */}
          {['MCQ', 'Speed Program', 'Shuffle', 'Buzzer'].map((type) => (
            <div key={type} className='mb-4 flex items-center'>
              <div className='w-60 h-14 rounded-2xl bg-amber-400 flex items-center justify-center'>
                <h1 className='text-2xl text-amber-50 font-bold'>{type}</h1>
              </div>
              <button
                type="button"
                onClick={() => handleAddRound(type)}
                className='ml-4 w-30 h-14 rounded-2xl bg-amber-400 hover:bg-amber-700'
              >
                <h1 className='text-2xl text-amber-50 font-bold p-2'>Add</h1>
              </button>
            </div>
          ))}

          <div className='flex mt-6 justify-between'>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className='w-30 h-12 bg-amber-400 border-2 border-amber-700 rounded-2xl text-2xl text-amber-50 hover:bg-amber-700'
            >
              Back
            </button>
            <button
              type="button"
              disabled={rounds.length === 0}
              className='w-30 h-12 bg-amber-400 border-2 border-amber-700 rounded-2xl text-2xl text-amber-50 hover:bg-amber-700 disabled:opacity-50'
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRounds;
