import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#b9e18b] text-[#016435] py-4 px-6 flex flex-col items-center justify-center lg:flex-row lg:justify-center lg:items-center">
      <div className="flex flex-col items-center lg:flex-row lg:items-center">
        <div className="mb-4 lg:mb-0 lg:mr-4">
          <a
            href="https://www.instagram.com/claniliecreations/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#016435] text-sm hover:text-green-600 transition-colors duration-300 mr-4"
          >
            Instagram
          </a>
          <a
            href="https://www.vinted.fr/member/201655926"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#016435] text-sm hover:text-green-600 transition-colors duration-300"
          >
            Vinted
          </a>
          <div className="mt-2 text-center">
            <a
              href="https://raphael.littlestorm.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#016435] text-xs hover:text-green-600 transition-colors duration-300"
            >
              Created by Rapatt
            </a>
          </div>
        </div>
        <p className="text-center text-[#016435] mt-4 lg:mt-0 lg:ml-4">© {new Date().getFullYear()} Clanilie-Création. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
