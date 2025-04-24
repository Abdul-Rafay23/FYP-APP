import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from "../Assets/people-working-office-flat-design.png";

const SignupE = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    regno: '',
    password: '',
    role: '3' // Default to Student (3) as per your requirement
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate inputs
    if (!formData.regno.trim()) {
      setError('Registration number is required');
      setIsLoading(false);
      return;
    }

    if (!formData.password) {
      setError('Password is required');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }

    const payload = {
      RegNum: formData.regno.trim(),
      Password: formData.password,
      Role: parseInt(formData.role) // Convert to number
    };

    try {
      const response = await axios.post('http://localhost:8082/api/User/RegisterUser', payload, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.data && response.data.Success) {
        alert('User registered successfully!');
        navigate("/login");
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      
      // Handle specific error responses from the API
      if (error.response) {
        if (error.response.status === 400) {
          setError(error.response.data || 'Invalid input data');
        } else if (error.response.status === 409) {
          setError(error.response.data || 'Registration number already in use');
        } else {
          setError('Registration failed. Please try again later.');
        }
      } else if (error.request) {
        setError('No response from server. Please check your connection.');
      } else {
        setError('Registration could not be completed. Please check your information.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-900 p-4">
      {/* Form section */}
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md mb-8 lg:mb-0 lg:mr-8">
        <h1 className="text-4xl font-extrabold text-amber-400 mb-8 text-center">Register</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Reg Number */}
          <div>
            <label className="block text-amber-50 text-left mb-2 text-lg font-medium">
              Registration Number
            </label>
            <input
              type="text"
              name="regno"
              value={formData.regno}
              onChange={handleChange}
              placeholder="Enter Registration Number"
              required
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-700 text-white focus:border-amber-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-amber-50 text-left mb-2 text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password (min 6 characters)"
              required
              minLength="6"
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-700 text-white focus:border-amber-400 focus:outline-none"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-amber-50 text-left mb-2 text-lg font-medium">
              Select Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-700 text-white focus:border-amber-400 focus:outline-none"
            >
              <option value="2">Expert</option>
              <option value="3">Student</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full p-3 rounded-lg text-lg font-semibold transition ${
              isLoading
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-amber-500 hover:bg-amber-600 text-white'
            }`}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>

          {/* Navigation to login */}
          <div className="text-center pt-4">
            <p className="text-gray-300">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate("/logout")}
                className="text-amber-400 hover:text-amber-300 font-medium focus:outline-none"
              >
                Login here
              </button>
            </p>
          </div>
        </form>
      </div>

      {/* Image section */}
      <div className="hidden lg:block lg:w-1/2 max-w-2xl">
        <img
          src={img}
          alt="People working in an office"
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default SignupE;