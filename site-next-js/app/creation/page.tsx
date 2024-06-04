"use client"
import React, { useState } from 'react';
import Navbar from "../compoments/Navbar"

const Creation = () => {
  // Générer une liste d'images
  const images = Array.from({ length: 84 }, (_, i) => `/images/i${i + 1}.jpg`);

  // État pour gérer le nombre de lignes à afficher
  const [rowsToDisplay, setRowsToDisplay] = useState(3);

  // Calculer le nombre d'images par ligne (en supposant 4 images par ligne)
  const imagesPerRow = 4;
  const imagesToDisplay = images.slice(0, rowsToDisplay * imagesPerRow);

  // Fonction pour afficher plus de lignes
  const showMore = () => {
    setRowsToDisplay(prevRowsToDisplay => prevRowsToDisplay + 3);
  };

  return (
    <div>
      <Navbar />
      <h2 className="text-center text-2xl text-pink-600">Clanilie Création c'est ?</h2>
      <p className="text-center px-4">
        Nous vendons nos jolies créations ainsi que des créations pour les concerts. Nous proposons une variété de bracelets uniques, faits à la main avec amour et soin. Que ce soit pour une soirée décontractée entre amis ou pour un événement spécial, nos bracelets ajoutent une touche d'élégance et de style à n'importe quelle tenue. De plus, nous sommes ouvertes aux demandes personnalisées pour des bracelets adaptés à des occasions spécifiques telles que des concerts. Contactez-nous pour discuter de vos besoins et nous serons ravis de créer quelque chose de spécial pour vous !
      </p>
      <div className="grid grid-cols-4 gap-2 p-4 max-h-[600px] overflow-hidden">
        {imagesToDisplay.map((src, index) => (
          <img key={index} src={src} alt={`Creation ${index + 1}`} className="w-full h-auto" />
        ))}
      </div>
      {imagesToDisplay.length < images.length && (
        <button onClick={showMore} className="block mx-auto mt-4 px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 cursor-pointer">
          Voir plus
        </button>
      )}
</div>

  );
};

export default Creation;
