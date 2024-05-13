const fs = require('fs');

// Écriture du nouveau contenu dans le fichier data.txt
const newContent = 'Je manipule les fichiers avec un module node !';
fs.writeFile(__dirname + '/data.txt', newContent, (err) => {
  if (err) {
    console.error('Erreur lors de l\'écriture dans le fichier :', err);
    return;
  }

  console.log('Le contenu du fichier a été modifié avec succès.');
});
