import React, { useEffect, useState } from 'react';
import img3 from '../Assets/764.png';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate = useNavigate();

  const [winners, setWinners] = useState([]);
  const [teams, setTeams] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [winnersRes, teamsRes, competitionsRes] = await Promise.all([
          fetch('http://localhost:8082/api/WinnerBoard/GetAllWinners'),
          fetch('http://localhost:8082/api/Team/all'),
          fetch('http://localhost:8082/api/Competition/GetAllCompetitions'),
        ]);

        if (!winnersRes.ok || !teamsRes.ok || !competitionsRes.ok) {
          throw new Error('Failed to fetch some leaderboard data');
        }

        const winnersData = await winnersRes.json();
        const teamsData = await teamsRes.json();
        const competitionsData = await competitionsRes.json();

        setWinners(winnersData);
        setTeams(teamsData);
        setCompetitions(competitionsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getTeamName = (teamId) => {
    const team = teams.find(t => t.id === teamId);
    return team ? team.teamName : 'Unknown Team';
  };

  const getCompetitionYear = (competitionId) => {
    const competition = competitions.find(c => c.id === competitionId);
    if (competition && competition.competitionDate) {
      return new Date(competition.competitionDate).getFullYear();
    }
    return 'Unknown Year';
  };

  return (
    <>
      <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>Programming Community</h1>
        <ul className='hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold'>
          <li>
            <span className='hover:bg-amber-400 rounded-lg transition duration-300 text-3xl'>
              Leaderboard
            </span>
          </li>
        </ul>
        <button
          onClick={() => navigate(-1)}
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
          Back
        </button>
      </nav>

      <div className='w-full min-h-screen bg-gray-800 flex justify-center items-center py-10'>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-3xl">

          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Leaderboard</h1>

          {/* Loading and Error Messages */}
          {loading && <p className="text-white text-center">Loading...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {!loading && !error && winners.map((winner, index) => (
            <div key={index} className="mb-4 flex flex-col sm:flex-row items-center gap-4 bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img className='w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400' src={img3} alt={winner.name} />
              <div className="flex-grow text-left">
                <h2 className="text-white text-xl font-bold">{winner.name}</h2>
                <p className="text-amber-200">Team: {getTeamName(winner.teamId)}</p>
                <p className="text-amber-200">Competition Year: {getCompetitionYear(winner.competitionId)}</p>
              </div>
            </div>
          ))}

          {/* Your Rank Section */}
          <div className="flex justify-between pb-4 mt-8">
            <h1 className='text-2xl text-amber-50 font-bold'>Your Rank:</h1>
          </div>

          <div className="mb-6 flex items-center gap-4 bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <img className='w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400' src={img3} alt="Subhan Saeed" />
            <button
              type="button"
              className="flex-grow bg-amber-400 text-xl text-white py-3 rounded-md hover:bg-amber-600 transition duration-300">
              Subhan Saeed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
