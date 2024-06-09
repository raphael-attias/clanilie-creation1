// pages/index.js
import Navbar from "../app/compoments/Navbar";
import "../app/globals.css";
import Image from 'next/image';
import Link from 'next/link';

const images = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg'];

export default function Home() {
  return (
    <main className=" bg-white">
  <div>
    <Navbar />
    <div className="container mx-auto px-4">
      <h2 className="text-center text-pink-600 m-3">Une bref présentation</h2>
      <p className="text-center text-justify m-3">
        Nous sommes un groupe d'amis qui créons des bracelets qui peuvent être personnalisés !
        Vous pouvez faire votre demande <Link href="/contact">ici</Link>
      </p>

      <h2 className="text-center m-5">Un petit exemple ;</h2>
      <ul className="imageList flex flex-wrap justify-center gap-2">
        {images.map((img, index) => (
          <li key={index} className="inline-block">
            <Image src={`/images/${img}`} alt={`Bracelet example ${index + 1}`} width={200} height={200} className="w-32 h-32 object-cover"/>
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
