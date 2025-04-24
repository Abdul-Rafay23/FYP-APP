import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

const Questionbankadd = () => {
  const navigate = useNavigate();

  const [id, setId] = useState(0);
  const [subjectCode, setSubjectCode] = useState('');
  const [difficulty, setDifficulty] = useState(1);
  const [text, setText] = useState('');
  const [type, setType] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id,
      subjectCode,
      difficulty: parseInt(difficulty),
      text,
      type: parseInt(type),
    };

    try {
      const response = await axios.post('http://localhost:8082/api/Questions/PostQuestion', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert('Question created successfully!');
      } else {
        alert(`Failed to create question. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error creating question:', error.response || error.message || error);
      alert('Failed to create question. Please try again.');
      if (error.response) {
        console.error('Error response:', error.response.data);
      }
    }
  };

  return (
    <>
      <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>Programming Community</h1>
        </div>

        <ul className='hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold'>
          <li>
            <a className='hover:bg-amber-400 rounded-lg transition duration-300 mr-50 text-3xl'>
              Make Quiz
            </a>
          </li>
        </ul>

        <button onClick={() => navigate(-1)} className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
          Back
        </button>
      </nav>

      <div className='w-full h-screen bg-gray-800 flex justify-center items-center px-4'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Add Question</h1>

          {/* Subject Code */}
          <div className="mb-4">
            <label htmlFor="subjectCode" className="block text-xl text-amber-50 mb-2">Topic:</label>
            <input
              id="subjectCode"
              type="text"
              placeholder="CS101"
              value={subjectCode}
              onChange={(e) => setSubjectCode(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50 placeholder-gray-400"
              required
            />
          </div>



          {/* Difficulty */}
          <div className="mb-4">
            <label htmlFor="difficulty" className="block text-xl text-amber-50 mb-2">Difficulty:</label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50"
            >
              <option value="" disabled>Select Difficulty</option>
              <option value="1">1 - Easy</option>
              <option value="2">2 - Medium</option>
              <option value="3">3 - Hard</option>
            </select>
          </div>

          {/* Type */}
          <div className="mb-4">
            <label htmlFor="type" className="block text-xl text-amber-50 mb-2">Question Type:</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50"
            >
              <option value="" disabled>Select Question Type</option>
              <option value="1">Sentence</option>
              <option value="2">Multiple Choice</option>
              <option value="3">True/False</option>
            </select>
          </div>

          {/* Question Text */}
          <div className="mb-16">
            <label htmlFor="text" className="block text-xl text-amber-50 mb-2">Question Text:</label>
            <textarea
              id="text"
              placeholder="Type your question here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50 placeholder-gray-400"
              rows="3"
              required
            />
          </div>

          {/* Form Actions */}
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
              className="w-full sm:w-1/2 bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition ml-0 sm:ml-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Questionbankadd;
