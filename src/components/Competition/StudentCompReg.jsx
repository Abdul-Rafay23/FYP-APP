import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentCompReg = () => {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Retrieve selected competitionId from session
  const storedCompetitionId = sessionStorage.getItem('selectedCompetitionId');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!teamName || !storedCompetitionId) {
      setError('Please provide a team name and select a competition.');
      return;
    }

    const payload = {
      teamId: 0, // server will auto-generate
      teamName: teamName,
    };

    try {
      const response = await fetch('http://localhost:8082/api/Team/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to register team');
      }

      const teamData = await response.json();
      const createdTeamId = teamData.teamId;

      setSuccess('Team registered successfully!');
      setTeamName('');

      // Pass teamId, teamName, and competitionId to the next screen
      setTimeout(() => {
        navigate('/stucompaddmember', {
          state: {
            teamId: createdTeamId,
            teamName: teamName,
            competitionId: storedCompetitionId, // Pass competitionId
          },
        });
      }, 1000);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <>
      <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>Programming Community</h1>
        <button
          onClick={() => navigate(-1)}
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-amber-400 transition duration-300'
        >
          Back
        </button>
      </nav>

      <div className='w-full h-screen bg-gray-800 flex justify-center items-center px-4'>
        <form
          onSubmit={handleSubmit}
          className='bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md'
        >
          <h1 className='text-3xl font-semibold text-center text-amber-50 mb-6'>Register Team</h1>

          {/* Team Name Input */}
          <div className='mb-8'>
            <label htmlFor='teamName' className='block text-xl text-amber-50 mb-2'>
              Team Name:
            </label>
            <input
              id='teamName'
              type='text'
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50 bg-gray-800'
              required
            />
          </div>

          {/* Error / Success Messages */}
          {error && <p className='text-red-400 mb-4'>{error}</p>}
          {success && <p className='text-green-400 mb-4'>{success}</p>}

          {/* Buttons */}
          <div className='flex justify-between'>
            <button
              type='button'
              onClick={() => navigate(-1)}
              className='bg-gray-300 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-400 transition'
            >
              Back
            </button>
            <button
              type='submit'
              className='bg-amber-400 text-white py-2 px-6 rounded-md hover:bg-amber-600 transition'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentCompReg;
