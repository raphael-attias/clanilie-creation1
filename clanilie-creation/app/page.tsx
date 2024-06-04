// pages/index.js
import Navbar from "../app/compoments/Navbar";
import "../app/globals.css";
import Image from 'next/image';
import Link from 'next/link';

const images = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg'];

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="container bg-black">
        <h2 className="text-center text-pink-600">Une bref présentation</h2>
        <p>
          Nous sommes un groupe d'amis qui créons des bracelets qui peuvent être personnalisés !
          Vous pouvez faire votre demande <Link href="/contact">ici</Link>
        </p>

        <h2>Un petit exemple</h2>
        <ul className="imageList">
          {images.map((img, index) => (
            <li key={index}>
              <Image src={`/images/${img}`} alt={`Bracelet example ${index + 1}`} width={200} height={200} />
            </li>
          ))}
        </ul>

        <Link href="/creation">
          <button className="customButton">Créer votre bracelet</button>
        </Link>
      </div>
    </div>
  );
}
