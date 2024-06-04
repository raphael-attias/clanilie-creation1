// pages/index.js
import Navbar from "../app/compoments/Navbar";
import "../app/globals.css";
import Image from 'next/image';
import Link from 'next/link';

const images = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg'];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    <Navbar />
    <div className="container mx-auto px-4">
      <h2 className="text-center text-pink-600">Une bref présentation</h2>
      <p className="text-center">
        Nous sommes un groupe d'amis qui créons des bracelets qui peuvent être personnalisés !
        Vous pouvez faire votre demande <Link href="/contact">ici</Link>
      </p>

      <h2 className="text-center">Un petit exemple</h2>
      <ul className="imageList flex flex-wrap justify-center gap-2">
        {images.map((img, index) => (
          <li key={index} className="inline-block">
            <Image src={`/images/${img}`} alt={`Bracelet example ${index + 1}`} width={200} height={200} />
          </li>
        ))}
      </ul>

      <Link href="/creation">
        <button className="customButton block mx-auto mt-4 px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 cursor-pointer">
          Créer votre bracelet
        </button>
      </Link>
    </div>
  </div>
</main>

  );
}
