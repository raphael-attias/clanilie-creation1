"use client";
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";

const Creation = () => {
  const [images, setImages] = useState([]);
  const [rowsToDisplay, setRowsToDisplay] = useState(3);
  const imagesPerRow = 3;

  useEffect(() => {
    // Charger les données JSON
    fetch('/images.json')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  const showMore = () => {
    setRowsToDisplay(prevRowsToDisplay => prevRowsToDisplay + 3);
  };

  const imagesToDisplay = images.slice(0, rowsToDisplay * imagesPerRow);

  return (
    <main className="bg-white">
      <div>
        <Navbar />
        <h2 className="text-center text-2xl text-pink-600 m-5 mt-5">Clanilie Création c'est ?</h2>
        <p className="text-justify m-5 text-pink-600">
          Nous vendons nos jolies créations ainsi que des créations pour les concerts. Nous proposons une variété de bracelets uniques, faits à la main avec amour et soin. Que ce soit pour une soirée décontractée entre amis ou pour un événement spécial, nos bracelets ajoutent une touche d'élégance et de style à n'importe quelle tenue. De plus, nous sommes ouvertes aux demandes personnalisées pour des bracelets adaptés à des occasions spécifiques telles que des concerts. Contactez-nous pour discuter de vos besoins et nous serons ravis de créer quelque chose de spécial pour vous !
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-3 max-w-screen-lg mx-auto">
          {imagesToDisplay.map((image, index) => (
            <div key={index} className="relative bg-green-200 rounded-lg border border-gray-300 p-2 flex justify-center items-center hover:transform hover:scale-105 transition-transform duration-300">
              <img src={image.src} alt={image.alt} className="max-w-full h-auto object-cover" />
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
    </main>
  );
};

export default Creation;
