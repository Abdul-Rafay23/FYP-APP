// StudentTasks.jsx

import React, { useState, useEffect } from 'react';
import img2 from '../Assets/c-plus-plus-4096.png';
import img5 from '../Assets/Java_Logo.svg.png';
import { useNavigate } from 'react-router-dom';

const StudentTasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/Task/GetAllTasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <>
      <nav className="bg-gray-900 p-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-amber-400 font-serif">Programming Community</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-amber-500 text-white py-2 px-6 rounded-lg hover:bg-amber-400 transition">
          Back
        </button>
      </nav>

      <div className="flex flex-wrap p-4 gap-4 bg-gray-700 justify-center">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="h-96 w-full sm:w-72 p-6 border-2 border-amber-300 rounded-2xl bg-gray-900 flex flex-col items-center">
            <h3 className="text-amber-50 font-bold text-lg">Start Date</h3>
            <p className="text-amber-50 text-xl mb-2">{task.startDate}</p>
            <h3 className="text-amber-50 font-bold text-lg">End Date</h3>
            <p className="text-amber-50 text-lg mb-4">{task.endDate}</p>
            <img
              className="w-32 h-32 object-contain mb-4"
              src={index % 2 === 0 ? img2 : img5}
              alt="Task"
            />
            <button
              onClick={() => navigate(`/stusolvetask`)}
              className="bg-amber-500 text-white font-semibold w-full py-2 rounded-lg hover:bg-amber-400 transition">
              Task {index + 1}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentTasks;
