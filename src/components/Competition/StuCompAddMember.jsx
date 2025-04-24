import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const StuCompAddMember = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { teamId, teamName, competitionId } = location.state || {};

  const [users, setUsers] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:8082/api/User/GetAllUser');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  const handleUserSelect = (id) => {
    setSelectedUserIds((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Step 1: Register each team member
      for (let userId of selectedUserIds) {
        const memberRes = await fetch('http://localhost:8082/api/TeamMember/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: 0, teamId, userId }),
        });

        if (!memberRes.ok) {
          throw new Error(`Failed to add user ID ${userId} to the team`);
        }
      }

      // Step 2: Register the team in the competition
      const compTeamRes = await fetch('http://localhost:8082/api/CompetitionTeam/AddCompetitionTeam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: 0,
          competitionId: Number(competitionId),
          teamId,
        }),
      });

      if (!compTeamRes.ok) {
        throw new Error('Failed to register team in competition');
      }

      // 🎉 Success
      setSuccess('Team members added and registered to competition successfully!');
      setSelectedUserIds([]);

      setTimeout(() => navigate('/studentcomp'), 1500);
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
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-amber-400 transition'
        >
          Back
        </button>
      </nav>

      <div className='w-full min-h-screen bg-gray-800 flex justify-center items-start py-10 px-4'>
        <form
          onSubmit={handleSubmit}
          className='bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-2xl'
        >
          <h1 className='text-3xl font-semibold text-center text-amber-50 mb-6'>
            Add Members to Team: <span className="text-amber-300">{teamName}</span>
          </h1>

          {/* User Selection */}
          <div className='mb-6'>
            <label className='block text-xl text-amber-50 mb-2'>Select Team Members:</label>
            <div className='max-h-60 overflow-y-auto bg-gray-800 border border-gray-700 rounded p-4'>
              {users.map((user) => (
                <label key={user.id} className='flex items-center space-x-3 text-white mb-2'>
                  <input
                    type='checkbox'
                    checked={selectedUserIds.includes(user.id)}
                    onChange={() => handleUserSelect(user.id)}
                    className='form-checkbox h-5 w-5 text-amber-500'
                  />
                  <span>{`${user.firstname} ${user.lastname} (${user.regNum})`}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Messages */}
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
              Register Members
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StuCompAddMember;
