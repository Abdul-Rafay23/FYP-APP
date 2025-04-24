import React, { useState, useEffect } from 'react';
import { IoMdCheckbox } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Addexpertisesub = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const navigate = useNavigate();

  // Fetch Topics from the API
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/Topic/GetAllTopics');
        const data = await response.json();
        setTopics(data);

        // Load selected topics from localStorage when the component mounts
        const savedTopics = JSON.parse(localStorage.getItem('selectedTopics')) || [];
        setSelectedTopics(savedTopics);
      } catch (error) {
        console.error('Error fetching Topics:', error);
      }
    };
    fetchTopics();
  }, []);

  // Handle checkbox change for topic selection
  const handleCheckboxChange = (topic) => {
    let updatedSelectedTopics;
    if (selectedTopics.some((selected) => selected.id === topic.id)) {
      // Remove topic from selected list if unchecked
      updatedSelectedTopics = selectedTopics.filter((selected) => selected.id !== topic.id);
    } else {
      // Add topic to selected list if checked
      updatedSelectedTopics = [...selectedTopics, topic];
    }

    setSelectedTopics(updatedSelectedTopics);
    localStorage.setItem('selectedTopics', JSON.stringify(updatedSelectedTopics));
  };

  // Handle save action (send selected topics to the backend)
  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:8082/api/Expertise/SaveExpertise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedTopics }),
      });
      const result = await response.json();

      if (response.ok) {
        console.log('Expertise saved successfully:', result.message);
        navigate('/home'); // Navigate back to home after saving
      } else {
        console.error('Error saving expertise:', result.error);
      }
    } catch (error) {
      console.error('Error saving expertise:', error);
    }
  };

  // Handle delete action for removing topic from selected list
  const handleDelete = (topic) => {
    // Remove the topic from the selected topics list
    const updatedSelectedTopics = selectedTopics.filter((selected) => selected.id !== topic.id);

    // Update the state for selected topics
    setSelectedTopics(updatedSelectedTopics);

    // Update the state for available topics
    setTopics((prevTopics) => {
      // Only add the topic back if it's not already in the list of available topics
      if (!prevTopics.some((t) => t.id === topic.id)) {
        return [...prevTopics, topic];
      }
      return prevTopics;
    });

    // Update localStorage with the new selected topics
    localStorage.setItem('selectedTopics', JSON.stringify(updatedSelectedTopics));
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
              Add Expertise
            </a>
          </li>
        </ul>

        {/* Back Button */}
        <button onClick={() => navigate(-1)} className='bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
          Back
        </button>
      </nav>

      <div className='w-full h-250 bg-gray-800 flex justify-center items-center py-10'>
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-amber-50 mb-6">Add Expertise</h1>

          {/* Display Available Topics */}
          <div className="mb-6">
            <h2 className="text-2xl text-amber-50">Available Topics</h2>
            {topics
              .filter((topic) => !selectedTopics.some((selected) => selected.id === topic.id)) // Filter out selected topics
              .map((topic) => (
                <div key={topic.id} className='flex items-center pb-4'>
                  <input
                    type="checkbox"
                    checked={selectedTopics.some((selected) => selected.id === topic.id)}
                    onChange={() => handleCheckboxChange(topic)}
                    className="text-3xl"
                  />
                  <span className='text-white ml-4'>
                    {topic.title} - {topic.subjectCode}
                  </span>
                </div>
              ))}
          </div>

          {/* Display Selected Topics (Expertise List) */}
          <div className="mb-6">
            <h2 className="text-2xl text-amber-50">Selected Expertise</h2>
            {selectedTopics.map((topic) => (
              <div key={topic.id} className='flex items-center pb-4'>
                <IoMdCheckbox className='text-3xl' />
                <span className='text-white ml-4'>{topic.title} - {topic.subjectCode}</span>
                <button
                  onClick={() => handleDelete(topic)}
                  className="ml-4 text-red-500 hover:text-red-700 transition duration-300"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Form Actions */}
          <div className='flex flex-col sm:flex-row justify-center gap-4 mt-6'>
            <button onClick={() => navigate("/home")} className='bg-gray-500 text-white font-semibold w-full sm:w-40 h-10 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
              Back
            </button>
            <button
             onClick={()=>navigate("/home")}
             className='bg-amber-500 text-white font-semibold w-full sm:w-40 h-10 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addexpertisesub;
