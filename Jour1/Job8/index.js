const fs = require('fs');

// Lecture du contenu du fichier data.txt de façon asynchrone
fs.readFile(__dirname + '/data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier :', err);
    return;
  }

  // Affichage d'une lettre sur deux du contenu du fichier
  for (let i = 0; i < data.length; i += 2) {
    process.stdout.write(data[i]);
  }
  console.log();
});
