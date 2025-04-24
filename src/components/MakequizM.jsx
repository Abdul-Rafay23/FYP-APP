import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MakequizM = () => {
  const navigate = useNavigate();

  // State for the dates
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // State to manage the questions
  const [question, setQuestion] = useState('');
  const [questionsList, setQuestionsList] = useState([]);

  // Handle adding question to the list
  const handleAddQuestion = (e) => {
    e.preventDefault(); // Prevent form submission
    if (question.trim()) {
      setQuestionsList([...questionsList, question]);
      setQuestion(''); // Clear the textarea after adding the question
    }
  };

  return (
    <>
      <nav className='bg-gray-900 p-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-extrabold text-amber-400 font-serif'>
            Programming Community
          </h1>
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
        <button
          onClick={() => navigate(-1)}
          className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'
        >
          Back
        </button>
      </nav>

      {/* Form */}
      <div className='w-screen h-screen bg-gray-800 flex justify-center items-center'>
        <form
          onSubmit={handleAddQuestion}
          className='bg-gray-900 p-8 rounded-lg shadow-lg w-full sm:max-w-lg'
        >
          <h1 className='text-xl font-semibold text-center text-amber-50 mb-4'>
            Make Quiz
          </h1>

          {/* Minimum Level Dropdown */}
          <div className='mb-4'>
            <label htmlFor='minLevel' className='block text-xl text-amber-50 mb-2'>
              Question of:
            </label>
            <select
              id='minLevel'
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50'
            >
              <option value='1'>Introduction to Programming</option>
            </select>
          </div>

          {/* Maximum Level Dropdown */}
          <div className='mb-4'>
            <label htmlFor='maxLevel' className='block text-xl text-amber-50 mb-2'>
              Level:
            </label>
            <select
              id='maxLevel'
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>

          {/* Add Question Textarea */}
          <div className='mb-4'>
            <h3 className='block text-xl text-amber-50 mb-2'>Add Question</h3>
            <textarea
              id='question'
              rows='4'
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 text-amber-50'
              placeholder='Enter your question here'
            ></textarea>
          </div>

          <div className='mb-4'>
            <button
              type='submit'
              className='w-full bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition ml-2'
            >
              Add Question
            </button>
          </div>

          {/* Display the added questions below the form */}
          <div className='w-full max-w-lg mx-auto mt-8 bg-gray-800 p-4 rounded-lg overflow-hidden mb-2'>
            <h2 className='text-2xl text-amber-50 mb-4'>Added Questions:</h2>
            <div className='max-h-72 overflow-y-auto'>
              <ul className='text-amber-50'>
                {questionsList.length === 0 ? (
                  <li>No questions added yet.</li>
                ) : (
                  questionsList.map((question, index) => (
                    <li key={index} className='mb-2'>
                      {index + 1}. {question}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>

          {/* Form Actions */}
          <div className='flex flex-col sm:flex-row justify-between gap-4'>
            <button
              onClick={() => navigate(-1)}
              type='button'
              className='w-full sm:w-1/2 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 transition'
            >
              Back
            </button>
            <button
            onClick={()=> navigate("/home")}
              type='submit'
              className='w-full sm:w-1/2 bg-amber-400 text-white py-3 rounded-md hover:bg-amber-600 transition'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MakequizM;
