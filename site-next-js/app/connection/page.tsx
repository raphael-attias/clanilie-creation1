'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const endpoint = isRegistering ? '/api/register' : '/api/login';
    const res = await fetch(`http://localhost:5000${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      router.push('/dash');
    } else {
      const data = await res.json();
      setError(data.error);
    }
  };

  return (
    <main>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-2xl mb-4 text-[#ff6dc6]">{isRegistering ? 'Register' : 'Login'}</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2 text-[#ff6dc6]">Username</label>
          <input
            type="text"
            className="w-full p-2 border border-[#ff6dc6] rounded text-[#b9e105]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-[#ff6dc6]">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-[#ff6dc6] rounded text-[#b9e105]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-[#ff6dc6] text-white rounded">
          {isRegistering ? 'Register' : 'Login'}
        </button>
        <button
          type="button"
          className="w-full p-2 mt-2 bg-transparent border border-[#ff6dc6] text-[#ff6dc6] rounded"
          onClick={() => {
            setIsRegistering(!isRegistering);
            setError('');
          }}
        >
          {isRegistering ? 'Switch to Login' : 'Switch to Register'}
        </button>
      </form>
      </div>
      <Footer />
    </main>
  );
};

export default LoginPage;
