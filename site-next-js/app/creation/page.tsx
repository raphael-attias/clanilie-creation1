"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from "../compoments/Navbar"

const Creation = () => {
  const images = [
    "i1.jpg", "i2.jpg", "i3.jpg", "i4.jpg", "i5.jpg", "i6.jpg", "i7.jpg", "i8.jpg", "i9.jpg", "i10.jpg",
    "i11.jpg", "i12.jpg", "i13.jpg", "i14.jpg", "i15.jpg", "i16.jpg", "i17.jpg", "i18.jpg", "i19.jpg", "i20.jpg",
    "i21.jpg", "i22.jpg", "i23.jpg", "i24.jpg", "i25.jpg", "i26.jpg", "i27.jpg", "i28.jpg", "i29.jpg", "i30.jpg",
    "i31.jpg", "i32.jpg", "i33.jpg", "i34.jpg", "i35.jpg", "i36.jpg", "i37.jpg", "i38.jpg", "i39.jpg", "i40.jpg",
    "i41.jpg", "i42.jpg", "i43.jpg", "i44.jpg", "i45.jpg", "i46.jpg", "i47.jpg", "i48.jpg", "i49.jpg", "i50.jpg",
    "i51.jpg", "i52.jpg", "i53.jpg", "i54.jpg", "i55.jpg", "i56.jpg", "i57.jpg", "i58.jpg", "i59.jpg", "i60.jpg",
    "i61.jpg", "i62.jpg", "i63.jpg", "i64.jpg", "i65.jpg", "i66.jpg", "i67.jpg", "i68.jpg", "i69.jpg", "i70.jpg",
    "i71.jpg", "i72.jpg", "i73.jpg", "i74.jpg", "i75.jpg", "i76.jpg", "i77.jpg", "i78.jpg", "i79.jpg", "i80.jpg",
    "i81.jpg", "i82.jpg", "i83.jpg", "i84.jpg"
  ];

  const [rowsToDisplay, setRowsToDisplay] = useState(3);
  const imagesPerRow = 3;

  const showMore = () => {
    setRowsToDisplay(prevRowsToDisplay => prevRowsToDisplay + 3);
  };

  const imagesToDisplay = images.slice(0, rowsToDisplay * imagesPerRow);

  return (
    <main className="bg-white">
      <div>
        <Navbar />
        <h2 className="text-center text-2xl text-[#ff6dc6] m-5 mt-5">Clanilie Création c'est ?</h2>
        <p className="text-justify m-5 ">
          Nous vendons nos jolies créations ainsi que des créations pour les concerts. Nous proposons une variété de bracelets uniques, faits à la main avec amour et soin. Que ce soit pour une soirée décontractée entre amis ou pour un événement spécial, nos bracelets ajoutent une touche d'élégance et de style à n'importe quelle tenue. De plus, nous sommes ouvertes aux demandes personnalisées pour des bracelets adaptés à des occasions spécifiques telles que des concerts. Contactez-nous pour discuter de vos besoins et nous serons ravis de créer quelque chose de spécial pour vous !
        </p>
        <ul className="grid grid-cols-3 gap-3 p-3 max-w-screen-lg mx-auto">
  {imagesToDisplay.map((img, index) => (
    <li key={index} className="relative flex justify-center items-center">
      <div className="bg-[#b9e18b] p-[10px] rounded-lg flex justify-center items-center" style={{ width: 'max-content', height: 'max-content' }}>

      <Image
  src={`/images/${img}`}
  alt={`Bracelet example ${index + 1}`}
  width={200}
  height={200}
  layout="fixed"
  objectFit="cover"
  loading="lazy"
/>
      </div>
    </li>
  ))}
</ul>
        {imagesToDisplay.length < images.length && (
          <div className="flex justify-center">
            <button onClick={showMore} className="mt-4 px-6 py-2 bg-[#ff6dc6] text-white rounded-md hover:bg-[#ff6dc6] cursor-pointer">
              Voir plus
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Creation;
