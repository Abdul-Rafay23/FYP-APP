import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

const StuQuizHistory = () => {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    fetch('https://localhost:7229/api/SubmittedTask/GetSubmittedTask')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch quiz history');
        }
        return response.json();
      })
      .then((data) => {
        // Extend with mock fields that your backend doesn't return yet
        setQuiz({
          ...data,
          quizTitle: "C++ Quiz No 1",
          category: "Programming",
          date: "2025-03-13",
          obtainedMarks: 8,
          totalMarks: 10
        });
      })
      .catch((error) => {
        console.error('Error fetching quiz history:', error);
      });
  }, []);

  return (
    <>
      {/* Nav Bar */}
      <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>Programming Community</h1>
        </div>

        <ul className='hidden sm:flex gap-6 items-center text-lg text-blue-50 font-bold'>
          <li>
            <a className='hover:bg-amber-400 rounded-lg transition duration-300 mr-50 text-3xl'>
              Student Quiz History
            </a>
          </li>
        </ul>

        <button
          onClick={() => navigate(-1)}
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'
        >
          Back
        </button>
      </nav>

      {/* Main Content */}
      <div className='w-full h-screen bg-gray-800 flex justify-center items-center px-4 overflow-auto'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Quiz History</h1>

          {/* Header Box */}
          <div className="mb-2 w-40 h-12 rounded-3xl ml-36 bg-amber-400 p-0.5 justify-center text-center">
            <h1 className='text-2xl text-black font-bold mt-1.5'>Quizzes</h1>
          </div>

          {/* Single Quiz Entry */}
          {quiz && (
            <div className="mb-4 w-full h-32 rounded-2xl bg-amber-400 p-0.5 justify-center text-center">
              <div>
                <h1 className='text-md font-bold'>
                  {new Date(quiz.date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </h1>
              </div>
              <div className='w-32 h-6 rounded-xl bg-black mt-0.5 ml-40 flex justify-center items-center'>
                <h1 className='text-amber-50 text-sm'>{quiz.category}</h1>
              </div>
              <div>
                <h1 className='text-md font-bold'>{quiz.quizTitle}</h1>
              </div>
              <div className='w-48 h-8 rounded-xl bg-black mt-2 ml-32 flex justify-center items-center'>
                <h1 className='text-amber-50 text-sm p-1.5'>
                  Obtained Marks: {quiz.obtainedMarks}/{quiz.totalMarks}
                </h1>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full sm:w-1/2 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => navigate("/studentcomphistory")}
              className="w-full sm:w-1/2 bg-amber-400 text-gray-800 py-3 rounded-md hover:bg-amber-700 transition"
            >
              Competition History
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StuQuizHistory;
