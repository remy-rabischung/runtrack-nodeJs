const express = require('express');
const app = express();

app.listen(80, () => {
    console.log('Server is running on port 80');
  });

  app.get('/', (req, res) => {
    res.send('Bienvenue sur la page d’accueil de notre site !');
  });
  
  app.get('/about', (req, res) => {
    res.send('Ce projet est une application web.');
  });