import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewAllQuestions = () => {
  const navigate = useNavigate();

  // State to store the fetched questions and filtered ones
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subjectFilter, setSubjectFilter] = useState('');
  const base_url = "http://localhost:8082";

  // Fetch data from the API in useEffect
  useEffect(() => {
    fetch(base_url + '/api/questions/getallquestions')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch questions');
        }
        return res.json();
      })
      .then((data) => {
        setQuestions(data);
        setFilteredQuestions(data);  // Initially, all questions are displayed
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter questions based on subject
  useEffect(() => {
    let filtered = questions;

    if (subjectFilter) {
      filtered = filtered.filter((question) =>
        question.subjectCode.toLowerCase().includes(subjectFilter.toLowerCase())
      );
    }

    setFilteredQuestions(filtered);
  }, [subjectFilter, questions]); // Re-filter when subjectFilter changes

  if (loading) {
    return (
      <div className="bg-gray-800 h-screen flex justify-center items-center">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Loading...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-800 h-screen flex justify-center items-center">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Error: {error}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-center p-6">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">All Questions</h1>

        {/* Filter Section */}
        <div className="mb-6">
          <div>
            <label className="block text-amber-50">Subject</label>
            <input
              type="text"
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-700 text-amber-50"
              placeholder="Filter by Subject"
            />
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4 mb-16">
          {filteredQuestions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredQuestions.map((question) => (
                <div
                  key={question.id}
                  className="bg-gray-700 p-4 rounded-lg shadow-md text-amber-50"
                >
                  <h2 className="text-xl font-semibold">{question.text}</h2>
                  <p>{question.subjectCode}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-amber-50">No questions match the filter criteria.</p>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/questionbank')}
            className="bg-amber-400 text-white py-2 px-6 rounded-lg hover:bg-amber-600 transition duration-300"
          >
            Back to Question Bank
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewAllQuestions;
