const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serveur statique pour les fichiers publics
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf8', (err, html) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.send(html);
    }
  });
});

app.get('/about', (req, res) => {
  fs.readFile(path.join(__dirname, 'views', 'about.html'), 'utf8', (err, html) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.send(html);
    }
  });
});

// Démarrer le serveur
app.listen(80, () => {
  console.log('Server is running on port 80');
});
