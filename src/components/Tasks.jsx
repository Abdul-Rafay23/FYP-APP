import React, { useState, useEffect } from 'react';
import img2 from '../Assets/c-plus-plus-4096.png';
import img5 from '../Assets/Java_Logo.svg.png';
import img4 from '../Assets/R.png';
import img3 from '../Assets/png-javascript-badge-picture-8.png';
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]); // State to store fetched tasks
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null); // Track which task is selected

  // Fetch tasks from the API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/Task/GetAllTasks');
        const data = await response.json();
        setTasks(data); // Store the fetched data in the state
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleTaskClick = (index) => {
    setSelectedTaskIndex(index === selectedTaskIndex ? null : index); // Toggle visibility of the question
  };

  return (
    <>
      <nav className="bg-gray-900 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-extrabold text-amber-400 font-serif">Programming Community</h1>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold">
          <li>
            <a className="hover:bg-amber-400 rounded-lg transition duration-300 mr-50 text-3xl">
              Tasks
            </a>
          </li>
        </ul>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300">
          Back
        </button>
      </nav>

      <div className="h-full w-full flex flex-wrap p-4 gap-4 bg-gray-700 justify-center">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="h-96 w-full sm:w-72 p-6 border-2 border-amber-300 rounded-2xl bg-gray-900 flex flex-col justify-between items-center">
            <h3 className="text-amber-50 font-bold text-lg sm:text-xl">Start Date</h3>
            <h1 className="text-center text-amber-50 text-xl sm:text-2xl font-bold mb-4">{task.startDate}</h1>
            <h3 className="text-amber-50 font-bold text-lg sm:text-xl">End Date</h3>
            <h2 className="text-center text-amber-50 text-lg sm:text-xl font-semibold mb-4">{task.endDate}</h2>

            {/* Dynamic Image Based on Index */}
            <img
              className="w-32 h-32 object-contain mb-4 sm:w-40 sm:h-40"
              src={index % 2 === 0 ? img2 : img5} // Logic to toggle images
              alt="Task Image"
            />

            {/* Task Button */}
            <button
              onClick={() => handleTaskClick(index)}
              className="bg-amber-500 text-white font-semibold w-full py-2 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300">
              Task {index + 1}
            </button>

            {/* Display Question Below Button when the task is clicked */}
            {selectedTaskIndex === index && (
              <div className="mt-4 bg-gray-800 p-4 rounded-lg">
                <p className="text-amber-50 font-semibold">{task.maxLevel || 'No question available for this task.'}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tasks;
