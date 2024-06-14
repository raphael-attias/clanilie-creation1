'use client';

import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:claniliecreations@gmail.com';
  };

  const handleVintedClick = () => {
    window.open('https://www.vinted.fr/member/201655926', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/claniliecreations/', '_blank');
  };

  return (
    <main>
      <Navbar /> {/* Assurez-vous que Navbar est importé et utilisé correctement */}
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-4 text-[#ff6dc6]">Contactez-nous !</h1>
          <p className="text-gray-700 mb-6">
            Nous c'est Clarisse, Nina et Emilie. Ici on vend nos jolies créations, ainsi que nos créations pour le Eras tour (demande pour d'autres concerts possible).
            Des bracelets personnalisables sont possibles, n'hésitez pas à nous contacter en mp :)
          </p>
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleEmailClick}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Envoyer un email
            </button>
            <button
              onClick={handleVintedClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Acheter sur Vinted
            </button>
            <button
              onClick={handleInstagramClick}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
            >
              Suivre sur Instagram
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
