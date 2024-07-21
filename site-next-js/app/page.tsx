"use client";

import React from 'react';
import Head from 'next/head';
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
    <>
      <Head>
        <title>Bracelets Personnalisés | Clanilie Création</title>
        <meta name="description" content="Découvrez les bracelets maison personnalisés de Clanilie Création. Chaque bracelet est unique, fabriqué avec soin et des matériaux de haute qualité." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Bracelets Personnalisés | Clanilie Création" />
        <meta property="og:description" content="Découvrez les bracelets maison personnalisés de Clanilie Création. Chaque bracelet est unique, fabriqué avec soin et des matériaux de haute qualité." />
        <meta property="og:image" content="https://clanilie-creation.eu/images/og-image.jpg" /> {/* Remplacez par l'URL de votre image */}
        <meta property="og:url" content="https://clanilie-creation.eu" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bracelets Personnalisés | Clanilie Création" />
        <meta name="twitter:description" content="Découvrez les bracelets maison personnalisés de Clanilie Création. Chaque bracelet est unique, fabriqué avec soin et des matériaux de haute qualité." />
        <meta name="twitter:image" content="https://clanilie-creation.eu/images/twitter-image.jpg" /> {/* Remplacez par l'URL de votre image */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Clanilie Création",
              "url": "https://clanilie-creation.eu",
              "logo": "https://clanilie-creation.eu/images/logo.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "claniliecreations@gmail.com"
              },
              "sameAs": [
                "https://www.facebook.com/ClanilieCreations",
                "https://www.instagram.com/ClanilieCreations"
              ],
              "description": "Clanilie Création offre des bracelets maison personnalisés avec des matériaux de haute qualité. Chaque bracelet est unique et fabriqué avec soin.",
              "product": {
                "@type": "Product",
                "name": "Bracelet Personnalisé",
                "image": "https://clanilie-creation.eu/images/produits/i1.jpg",
                "description": "Bracelet personnalisé fabriqué à la main avec des matériaux de haute qualité par Clanilie Création.",
                "brand": {
                  "@type": "Brand",
                  "name": "Clanilie Création"
                },
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "EUR",
                  "price": "50.00", // Remplacez par le prix réel
                  "itemCondition": "https://schema.org/NewCondition",
                  "availability": "https://schema.org/InStock",
                  "url": "https://clanilie-creation.eu/creation"
                }
              }
            }),
          }}
        />
      </Head>
      <main className="bg-white min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 flex-grow">
          <h2 className="text-center text-2xl text-[#ff6dc6] capitalize m-3">Une brève présentation de Clanilie Création</h2>
          <p className="text-center text-justify m-3 text-[#ff6dc6]">
            Bienvenue chez Clanilie Création ! Nous sommes un groupe d'amis passionnés par la création de bracelets personnalisés faits maison. Chaque bracelet est unique, fabriqué avec des matériaux de haute qualité pour garantir la durabilité et l'esthétique. Découvrez nos créations et faites votre demande <Link href="/contact">ici</Link>.
          </p>

          <section className="my-10">
            <h2 className="text-center text-2xl text-[#ff6dc6] capitalize m-3">Nos Valeurs</h2>
            <p className="text-center text-justify m-3 text-[#ff6dc6]">
              Chez Clanilie Création, nous croyons en l'importance de l'artisanat et du travail manuel. Nos bracelets personnalisés sont fabriqués à la main avec une attention particulière aux détails. Acheter nos bracelets, c'est soutenir des artisans locaux et préserver les techniques traditionnelles.
            </p>
          </section>

          <section className="my-10">
            <h2 className="text-center text-2xl text-[#ff6dc6] capitalize m-3">Nos Créations Personnalisées</h2>
            <ul className="imageList grid grid-cols-2 lg:grid-cols-4 gap-4 p-3 max-w-screen-lg mx-auto">
              {images.map((img, index) => (
                <li key={index} className="relative flex justify-center items-center">
                  <div className="image-container bg-[#b9e18b] p-[10px] rounded-lg flex justify-center items-center" style={{ width: 'max-content', height: 'max-content' }}>
                    <Image
                      src={`/images/produits/${img}`}
                      alt={`Bracelet personnalisé exemple ${index + 1}`}
                      width={200}
                      height={200}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="my-10">
            <h2 className="text-center text-2xl text-[#ff6dc6] capitalize m-3">Pourquoi Choisir Clanilie Création ?</h2>
            <p className="text-center text-justify m-3 text-[#ff6dc6]">
              En optant pour les créations de Clanilie Création, vous choisissez des bracelets uniques et personnalisés. Nous nous engageons à offrir un service client réactif et des produits qui répondent à vos attentes. Découvrez pourquoi nos bracelets maison sont les meilleurs choix pour vous.
            </p>
          </section>

          <div className="flex justify-center items-center mt-10 mb-20 flex-wrap gap-4">
            <Link href="/creation">
              <button className="w-[300px] h-[40px] md:w-auto md:h-auto mt-4 px-6 py-2 bg-[#ff6dc6] text-white rounded-md hover:bg-[#ff6dc6] cursor-pointer m-2">Créer votre bracelet personnalisé</button>
            </Link>
            <button
              onClick={handleVintedClick}
              className="w-[300px] h-[40px] md:w-auto mt-4 px-6 py-2 bg-[#ff6dc6] text-white rounded-md hover:bg-[#ff6dc6] cursor-pointer m-2"
            >
              Acheter sur Vinted
            </button>
            <Link href="/contact">
              <button
                onClick={handleEmailClick}
                className="w-[300px] h-[40px] md:w-auto pr-10 pl-10 mt-4 px-6 py-2 bg-[#ff6dc6] text-white rounded-md hover:bg-[#ff6dc6] cursor-pointer m-2"
              >
                Contactez Clanilie Création
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
