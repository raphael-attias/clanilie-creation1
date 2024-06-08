"use client";
import React, { useState } from 'react';
import Navbar from "../compoments/Navbar";

const Creation = () => {
  const images = Array.from({ length: 84 }, (_, i) => `/images/i${i + 1}.jpg`);
  const [rowsToDisplay, setRowsToDisplay] = useState(3);
  const imagesPerRow = 3;
  const imagesToDisplay = images.slice(0, rowsToDisplay * imagesPerRow);

  const showMore = () => {
    setRowsToDisplay(prevRowsToDisplay => prevRowsToDisplay + 3);
  };

  return (
    <div>
      <Navbar />
      <h2 className="text-center text-2xl text-pink-600 m-5 mt-5">Clanilie Création c'est ?</h2>
      <p className="text-justify m-5">
        Nous vendons nos jolies créations ainsi que des créations pour les concerts. Nous proposons une variété de bracelets uniques, faits à la main avec amour et soin. Que ce soit pour une soirée décontractée entre amis ou pour un événement spécial, nos bracelets ajoutent une touche d'élégance et de style à n'importe quelle tenue. De plus, nous sommes ouvertes aux demandes personnalisées pour des bracelets adaptés à des occasions spécifiques telles que des concerts. Contactez-nous pour discuter de vos besoins et nous serons ravis de créer quelque chose de spécial pour vous !
      </p>
      <div className="grid grid-cols-3 gap-3 p-3">
        {imagesToDisplay.map((src, index) => (
          <div key={index} className="relative bg-rgb(185, 225, 139) rounded-lg border-gray-300 p-[5px] flex justify-center items-center hover:transform hover:scale-105 transition-transform duration-300">
            <img src={src} alt={`Creation ${index + 1}`} className="w-32 h-32 object-cover" />
          </div>
        ))}
      </div>
      {imagesToDisplay.length < images.length && (
        <div className="flex justify-center">
          <button onClick={showMore} className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 cursor-pointer">
            Voir plus
          </button>
        </div>
      )}
    </div>
  );
};

export default Creation;
