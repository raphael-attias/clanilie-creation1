const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre.email@gmail.com',
    pass: 'votreMotDePasse'
  }
});

app.post('/send-email', (req, res) => {
  const { name, surname, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'destinataire.email@gmail.com',
    subject: `Nouveau message de ${name} ${surname}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Une erreur s'est produite lors de l'envoi de l'email.");
    } else {
      console.log('Email envoyé: ' + info.response);
      res.status(200).send('Email envoyé avec succès.');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
