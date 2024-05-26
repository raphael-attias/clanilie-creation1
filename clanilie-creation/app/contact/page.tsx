"use client";

import React, { useState } from 'react'
import Navbar from "../compoments/Navbar"

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
    <div>
        <Navbar />
      <h1>Contactez-nous</h1>
      <form onSubmit={submitForm}>
        <label>
          Nom :
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Prénom :
          <input type="text" name="surname" onChange={handleChange} />
        </label>
        <label>
          Email :
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Message :
          <textarea name="message" onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  )
}

export default Contact