"use client";

import React, { useState } from 'react';
import Navbar from "../compoments/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // Ici, vous pouvez appeler une fonction sendEmail() pour envoyer les données du formulaire
    console.log(formData);
  };

  return (
    <main className="bg-slate-50">
      <div>
        <Navbar />
        <h1 className="text-center text-xl text-[#016435] m-5">Contactez-nous !</h1>
        <form onSubmit={submitForm} className="max-w-xl mx-auto bg-white rounded-lg p-8 shadow-md m-3">
          <label className="block mb-2 text-[#016435]">
            Nom :
            <input type="text" name="name" onChange={handleChange} className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-[#ff6dc6] focus:border-[#ff6dc6]" />
          </label>
          <label className="block mb-2 text-[#016435]">
            Prénom :
            <input type="text" name="surname" onChange={handleChange} className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-[#ff6dc6] focus:border-[#ff6dc6]" />
          </label>
          <label className="block mb-2 text-[#016435]">
            Email :
            <input type="email" name="email" onChange={handleChange} className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-[#ff6dc6] focus:border-[#ff6dc6]" />
          </label>
          <label className="block mb-2 text-[#016435]">
            Message :
            <textarea name="message" onChange={handleChange} className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-[#ff6dc6] focus:border-[#ff6dc6]"></textarea>
          </label>
          <input type="submit" value="Envoyer" className="bg-[#016435] text-white rounded-md px-6 py-2 hover:bg-[#ff6dc6] cursor-pointer" />
        </form>
      </div>
    </main>
  );
};

export default Contact;
