import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    const API_URL = 'http://localhost:8082/api/User/GetAllUser';

    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const users = await response.json();

      if (!Array.isArray(users)) {
        setErrorMessage('Unexpected response from server.');
        return;
      }

      const matchedUser = users.find(
        user => user.email === email && user.password === password
      );

      if (matchedUser) {
        localStorage.setItem('userId', matchedUser.id);
        localStorage.setItem('userRole', matchedUser.role);

        if (matchedUser.role === 2) {
          navigate('/Home');
        } else if (matchedUser.role === 3) {
          navigate('/Homes');
        } else {
          navigate('/');
        }
      } else {
        setErrorMessage('Invalid email or password.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Unable to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-6 py-10">
      <h1 className="text-3xl font-bold text-yellow-400 mb-2 text-center">
        Programming Community
      </h1>
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">LOGIN</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full max-w-md p-3 mb-4 border border-white rounded-lg bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full max-w-md p-3 mb-4 border border-white rounded-lg bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMessage && (
        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
      )}

      <button
        onClick={handleLogin}
        disabled={loading}
        className={`w-full max-w-md p-3 rounded-lg font-semibold text-black bg-yellow-400 hover:bg-yellow-300 transition-all ${
          loading ? 'opacity-60 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default LoginSignup;
