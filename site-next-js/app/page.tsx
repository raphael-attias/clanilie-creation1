// pages/index.tsx
"use client";

import React from 'react';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const images = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg', 'i5.jpg', 'i6.jpg', 'i7.jpg', 'i8.jpg'];

const HomePage: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:claniliecreations@gmail.com';
  };

  const handleVintedClick = () => {
    window.open('https://www.vinted.fr/member/201655926', '_blank');
  };

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
          <ul className="imageList grid grid-cols-2 lg:grid-cols-4 gap-4 p-3 max-w-screen-lg mx-auto">
            {images.map((img, index) => (
              <li key={index} className="relative flex justify-center items-center">
                <div className="image-container bg-[#b9e18b] p-[10px] rounded-lg flex justify-center items-center" style={{ width: 'max-content', height: 'max-content' }}>
                  <Image
                    src={`/images/${img}`}
                    alt={`Bracelet example ${index + 1}`}
                    width={200}
                    height={200}
                    layout="fixed"
                    objectFit="cover"
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="my-10">
          <h2 className="text-center text-2xl text-[#ff6dc6] capitalize m-3">Pourquoi Nous Choisir ?</h2>
          <p className="text-center text-justify m-3 text-[#ff6dc6]">
            En choisissant nos créations, vous optez pour des produits uniques et personnalisés. Nous sommes dédiés à la satisfaction de nos clients et nous nous assurons que chaque pièce est à la hauteur de vos attentes. Nous offrons également un service client réactif pour répondre à toutes vos questions et demandes spéciales.
          </p>
        </section>

        <div className="flex justify-center items-center mt-10 mb-20 flex-wrap gap-4">
          <Link href="/creation">
            <button className="w-[377px] h-[40px] md:w-auto md:h-auto mt-4 px-6 py-2 bg-[#ff6dc6] text-white rounded-md hover:bg-[#ff6dc6] cursor-pointer m-2">Créer votre bracelet</button>
          </Link>
          <button
            onClick={handleEmailClick}
            className="flex-shrink-0 w-full md:w-auto mt-4 px-6 py-2 bg-[#ff6dc6] text-white rounded-md hover:bg-[#ff6dc6] cursor-pointer m-2"
          >
            Contactez-nous
          </button>
          <button
            onClick={handleVintedClick}
            className="flex-shrink-0 w-full md:w-auto mt-4 px-6 py-2 bg-[#ff6dc6] text-white rounded-md hover:bg-[#ff6dc6] cursor-pointer m-2"
          >
            Acheter sur Vinted
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
