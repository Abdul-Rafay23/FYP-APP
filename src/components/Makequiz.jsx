import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css"; // import the styles

const Makequiz = () => {
  const navigate = useNavigate();

  // State for the form data
  const [minLevel, setMinLevel] = useState('1');
  const [maxLevel, setMaxLevel] = useState('3');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the payload for the API request
    const payload = {
      minLevel: parseInt(minLevel),  // Ensure it's a number
      maxLevel: parseInt(maxLevel),  // Ensure it's a number
      startDate: startDate ? startDate.toISOString().split('T')[0] : null, // Format as yyyy-MM-dd
      endDate: endDate ? endDate.toISOString().split('T')[0] : null, // Format as yyyy-MM-dd
      isDeleted: false,
      taskQuestions: []  // Empty array for now
    };

    try {
      // Send POST request to API
      const response = await axios.post('http://localhost:8082/api/Task/AddTask', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle success response
      if (response.status === 200 || response.status === 201) {
        alert('Task created successfully!');
        navigate("/makequiz2"); // Navigate to the next step/page
      } else {
        alert(`Failed to create task. Status code: ${response.status}`);
      }
    } catch (error) {
      // Enhanced error handling
      console.error('Error creating task:', error.response || error.message || error);
      alert('Failed to create task. Please try again.');

      // Log detailed error response
      if (error.response) {
        console.error('Error response:', error.response.data);
      }
    }
  };

  // Navigate to the next page without saving
  const handleMoveNext = () => {
    navigate("/makequiz2");
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
        
        {/* Logout Button */}
        <button onClick={() => navigate(-1)} className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
          Back
        </button>
      </nav>

      {/* Form */}
      <div className='w-full h-screen bg-gray-800 flex justify-center items-center px-4'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Make Quiz</h1>

          {/* Minimum Level Dropdown */}
          <div className="mb-4">
            <label htmlFor="minLevel" className="block text-xl text-amber-50 mb-2">Minimum Level:</label>
            <select
              id="minLevel"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50"
              value={minLevel}
              onChange={(e) => setMinLevel(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          {/* Maximum Level Dropdown */}
          <div className="mb-4">
            <label htmlFor="maxLevel" className="block text-xl text-amber-50 mb-2">Maximum Level:</label>
            <select
              id="maxLevel"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50"
              value={maxLevel}
              onChange={(e) => setMaxLevel(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          {/* Start Date */}
          <div className="mb-4">
            <h3 className="block text-xl text-amber-50 mb-2">Select Start Date</h3>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50"
              placeholderText="Select Start Date"
              dateFormat="yyyy/MM/dd"
            />
          </div>

          {/* End Date */}
          <div className="mb-4">
            <h3 className="block text-xl text-amber-50 mb-2">Select End Date</h3>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50"
              placeholderText="Select End Date"
              dateFormat="yyyy/MM/dd"
            />
          </div>
          <div className=' w-full mb-4 flex-col sm:flex-row justify-center items-center ml-25'>
          <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-1/2 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition"
            >
              + Add Questions
            </button>
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
            {/* <button
              type="button"
              onClick={handleMoveNext}
              className="w-full sm:w-1/2 bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition ml-0 sm:ml-2"
            >
              Move Next
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default Makequiz;
