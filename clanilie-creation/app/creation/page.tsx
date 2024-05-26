"use client";

import React, { useState } from 'react'
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
    setRowsToDisplay(prevRowsToDisplay => prevRowsToDisplay + 1);
  };

  return (
    <div>
        <Navbar />
      <h2>Clanilie Création c'est ?</h2>
      <p>
        Nous vendons nos jolies créations ainsi que des créations pour les concerts. Nous proposons une variété de bracelets uniques, faits à la main avec amour et soin. Que ce soit pour une soirée décontractée entre amis ou pour un événement spécial, nos bracelets ajoutent une touche d'élégance et de style à n'importe quelle tenue. De plus, nous sommes ouvertes aux demandes personnalisées pour des bracelets adaptés à des occasions spécifiques telles que des concerts. Contactez-nous pour discuter de vos besoins et nous serons ravis de créer quelque chose de spécial pour vous !
      </p>
      <div className="image-grid">
        {imagesToDisplay.map((src, index) => (
          <img key={index} src={src} alt={`Creation ${index + 1}`} />
        ))}
      </div>
      {imagesToDisplay.length < images.length && (
        <button onClick={showMore} className="see-more-button">
          Voir plus
        </button>
      )}
    </div>
  )
}

export default Creation
