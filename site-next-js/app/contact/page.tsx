"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const images = ['i55.jpg', 'i45.jpg'];

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
    <main className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow items-center justify-center p-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-4 text-[#ff6dc6]">Contactez-nous !</h1>
          <p className="text-[#ff6dc6] mb-6">
            Nous c'est Clarisse, Nina et Emilie. Ici on vend nos jolies créations, ainsi que nos créations pour le Eras tour (demande pour d'autres concerts possible).
            Des bracelets personnalisables sont possibles, n'hésitez pas à nous contacter en mp :)
          </p>
          <div className="flex flex-col space-y-4">
            <a
              href="mailto:claniliecreations@gmail.com"
              className="w-full bg-[#b9e18b] hover:bg-[#016435] text-[#016435] font-bold py-2 px-4 rounded flex items-center justify-center"
            >
              <Image src="/images/logos/mail.png" alt="Email Icon" width={24} height={24} className="inline-block mr-2" />
              Envoyer un email
            </a>
            <button
              onClick={handleVintedClick}
              className="w-full bg-[#b9e18b] hover:bg-[#016435] text-[#016435] font-bold py-2 px-4 rounded flex items-center justify-center"
            >
              <Image src="/images/logos/vinted.png" alt="Vinted Icon" width={24} height={24} className="inline-block mr-2" />
              Acheter sur Vinted
            </button>
            <button
              onClick={handleInstagramClick}
              className="w-full bg-[#b9e18b] hover:bg-[#016435] text-[#016435] font-bold py-2 px-4 rounded flex items-center justify-center"
            >
              <Image src="/images/logos/instagram.png" alt="Instagram Icon" width={24} height={24} className="inline-block mr-2" />
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