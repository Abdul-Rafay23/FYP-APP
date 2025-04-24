import React, { useState, useEffect } from 'react';
import { IoMdCheckbox } from 'react-icons/io';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Addexpertise = () => {
  const [expertSubjects, setExpertSubjects] = useState([]);
  const navigate = useNavigate();

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchExpertSubjects = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/ExpertSubject/GetAllExpertSubjects');
        const data = await response.json();
        setExpertSubjects(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchExpertSubjects();
  }, []);

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

          {/* Checkbox Buttons for Expertise */}
          {expertSubjects.map((subject) => (
            <div key={subject.id} className='flex items-center pb-4'>
              <IoMdCheckbox className='text-3xl' />
              <button className='bg-amber-500 text-white font-semibold w-full ml-4 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
                {subject.subjectCode} {/* Display the subject code */}
              </button>
            </div>
          ))}

          {/* Form Actions */}
          <div className='flex flex-col sm:flex-row justify-center gap-4 mt-6'>
            <button onClick={() => navigate("/home")} className='bg-gray-500 text-white font-semibold w-full sm:w-40 h-10 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
              Back
            </button>
            <button
            onClick={()=>navigate("/addexpertisesub")}
            className='bg-amber-500 text-white font-semibold w-full sm:w-40 h-10 rounded-lg shadow-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300'>
              Add Expertise
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addexpertise;
