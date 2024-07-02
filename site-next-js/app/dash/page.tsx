'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';

const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState({ visits: 0, clicks: 0 });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/connection');
    } else {
      fetch('http://localhost:5000/api/stats', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setStats(data))
        .catch((err) => {
          console.error('Error fetching stats:', err);
          router.push('/connection');
        });
    }
  }, [router]);

  return (
    <main>
      <Navbar />
      <section className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-2xl mb-4 text-[#ff6dc6]">Dashboard</h2>
        <p className="text-[#ff6dc6]">Visits: {stats.visits}</p>
        <p className="text-[#ff6dc6]">Clicks: {stats.clicks}</p>
      </div>
      </section>
      <Footer />
    </main>
  );
};

export default DashboardPage;
