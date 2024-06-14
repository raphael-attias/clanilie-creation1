import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from 'next/image';
import Link from 'next/link';

const images = ['i1.jpg', 'i2.jpg', 'i3.jpg', 'i4.jpg'];

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <section className="my-8">
          <h2 className="text-center text-3xl text-[#ff6dc6] mb-6">Bienvenue chez Clanilie-Création</h2>
          <p className="text-center text-lg text-[#ff6dc6] leading-relaxed">
            Nous sommes Clarisse, Nina et Emilie, un groupe d'amis passionnés par la création de bracelets uniques et personnalisables ! Découvrez nos créations et n'hésitez pas à nous contacter pour des demandes spécifiques.
          </p>
        </section>

        <section className="my-8">
          <h2 className="text-center text-3xl text-[#ff6dc6] mb-6">Nos créations</h2>
          <ul className="imageList grid grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <li key={index}>
                <Image src={`/images/${img}`} alt={`Bracelet example ${index + 1}`} width={300} height={300} className="object-cover" />
              </li>
            ))}
          </ul>
        </section>

        <section className="my-8">
          <h2 className="text-center text-3xl text-[#ff6dc6] mb-6">Comment ça marche ?</h2>
          <p className="text-center text-lg text-[#ff6dc6] leading-relaxed mb-4">
            Vous pouvez commander nos bracelets personnalisés en nous contactant <Link href="/contact">ici</Link>. Nous sommes également présents sur Vinted pour des commandes directes.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact">
              <button className="customButton px-6 py-3 bg-[#ff6dc6] text-white rounded-md hover:bg-[#ff6dc6] cursor-pointer">
                Contactez-nous
              </button>
            </Link>
            <a href="https://www.vinted.fr/" target="_blank" rel="noopener noreferrer" className="customButton px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 cursor-pointer">
              Achetez sur Vinted
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
