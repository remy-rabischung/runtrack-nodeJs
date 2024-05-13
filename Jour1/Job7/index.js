const fs = require('fs');

// Lecture du contenu du fichier data.txt de façon asynchrone
fs.readFile(__dirname + '/data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier :', err);
    return;
  }

  // Affichage du contenu du fichier dans le terminal
  console.log(data);
});
