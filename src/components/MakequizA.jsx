import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MakequizA = () => {
  const navigate = useNavigate();

  // State to manage the questions
  const [questionsList, setQuestionsList] = useState([]);
  const [loading, setLoading] = useState(false);  // For loading state
  const [error, setError] = useState(null); // For error handling

  // Handle fetching questions from the API
  const handleFetchQuestions = async (e) => {
    e.preventDefault(); // Prevent form submission

    setLoading(true);  // Set loading state to true

    try {
      // Make a GET request to your API
      const response = await axios.get('https://localhost:7229/api/Questions/GetAllQuestions');
      
      // Extract the text attribute from each question
      const fetchedQuestions = response.data.map((question) => question.text);

      // Update the state with the fetched questions
      setQuestionsList(fetchedQuestions);
      setError(null);  // Reset any previous error
    } catch (err) {
      setError('Failed to fetch questions. Please try again later.');
      console.error('Error fetching questions:', err);
    } finally {
      setLoading(false);  // Set loading state to false
    }
  };

  return (
    <>
      <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>Programming Community</h1>
        </div>

        {/* Navigation Menu */}
        <ul className='hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold'>
          <li>
            <a className='hover:bg-amber-400 rounded-lg transition duration-300 mr-50 text-3xl'>
              Make Quiz
            </a>
          </li>
        </ul>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
          Back
        </button>
      </nav>

      {/* Form */}
      <div className='w-full h-screen bg-gray-800 flex justify-center items-center'>
        <form onSubmit={handleFetchQuestions} className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg">
          <h1 className="text-xl sm:text-2xl font-semibold text-center text-amber-50 mb-4">Make Quiz</h1>

          {/* Minimum Level Dropdown */}
          <div className="mb-4">
            <label htmlFor="minLevel" className="block text-lg sm:text-xl text-amber-50 mb-2">Question of:</label>
            <select
              id="minLevel"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50">
              <option value="1">Introduction to Programming</option>
            </select>
          </div>

          {/* Fetch Questions Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition">
              {loading ? 'Loading...' : 'Fetch Questions'}
            </button>
          </div>

          <div className="mb-4">
            <h3 className="block text-lg sm:text-xl text-amber-50 mb-2">Questions:</h3>
          </div>

          {/* Display Fetched Questions */}
          <div className="w-full max-w-lg mx-auto mt-8 bg-gray-800 p-4 rounded-lg overflow-hidden mb-4">
            <h2 className="text-2xl sm:text-3xl text-amber-50 mb-4">Fetched Questions:</h2>
            <div className="max-h-72 overflow-y-auto">
              {error && <div className="text-red-500">{error}</div>}
              <ul className="text-amber-50">
                {questionsList.length === 0 ? (
                  <li>No questions fetched yet.</li>
                ) : (
                  questionsList.map((question, index) => (
                    <li key={index} className="mb-2">
                      {index + 1}. {question}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-2">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="w-full sm:w-1/2 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition">
              Back
            </button>
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition ml-2">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MakequizA;
