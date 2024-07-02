'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('rapatt');
  const [password, setPassword] = useState("Lescrocsc'estbien13");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      router.push('/dash');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <main>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-2xl mb-4 text-[#ff6dc6]">Login</h2>
        <div className="mb-4">
          <label className="block mb-2 text-[#ff6dc6]">Username</label>
          <input
            type="text"
            className="w-full p-2 border border-[#ff6dc6] rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-[#ff6dc6]">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-[#ff6dc6] rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full p-2 bg-[#ff6dc6] text-white rounded">
          Login
        </button>
      </form>
      </div>
      <Footer />
    </main>
  );
};

export default LoginPage;
