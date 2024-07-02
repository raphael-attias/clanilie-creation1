'use client';

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const HomePage: React.FC = () => {
  useEffect(() => {
    fetch('http://localhost:5000/api/visit', { method: 'POST' });
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:claniliecreations@gmail.com';
  };

  const handleVintedClick = () => {
    fetch('http://localhost:5000/api/visit', { method: 'POST' });
    window.open('https://www.vinted.fr/member/201655926', '_blank');
  };

  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Example images array

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 flex-grow">
        <h2 className="text-center text-2xl text-[#ff6dc6] capitalize m-3">Une brève présentation</h2>
        <p className="text-center text-justify m-3 text-[#ff6dc6]">
          Nous sommes un groupe d'amis passionnés par la création de bracelets personnalisés ! Nous utilisons des matériaux de haute qualité pour garantir la durabilité et l'esthétique de nos produits. Chaque bracelet est unique et fabriqué avec amour et soin. Vous pouvez faire votre demande <Link href="/contact">ici</Link>.
        </p>
        <section className="my-10">
          <h2 className="text-center text-2xl text-[#ff6dc6] capitalize m-3">Nos Valeurs</h2>
          <p className="text-center text-justify m-3 text-[#ff6dc6]">
            Nous croyons en l'importance de l'artisanat et du travail manuel. Nos créations sont faites à la main, avec une attention particulière aux détails. Nous nous efforçons de créer des bijoux qui non seulement embellissent, mais racontent aussi une histoire. En achetant nos bracelets, vous soutenez des artisans locaux et contribuez à la préservation des techniques traditionnelles.
          </p>
        </section>
        <section className="my-10">
          <h2 className="text-center text-2xl text-[#ff6dc6] capitalize m-3">Nos Créations</h2>
          <ul className="images-list">
            {images.map((image, index) => (
              <li key={index} className="m-3">
                <Image src={`/${image}`} alt={`Image ${index + 1}`} width={200} height={200} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
