// Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#b9e18b] text-[#016435] py-4 px-6 flex items-center justify-between">
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#016435] hover:text-green-600 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5H10a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5H10a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5H10a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
            />
          </svg>
        </a>
        <a
          href="https://www.vinted.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#016435] hover:text-green-600 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5H10a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5H10a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5H10a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
            />
          </svg>
        </a>
      </div>
      <p className="text-[#016435]">© {new Date().getFullYear()} Votre Nom d'Association. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
