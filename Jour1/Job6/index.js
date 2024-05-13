const fs = require('fs');

// Lecture du contenu du fichier data.txt
const fileContent = fs.readFileSync(__dirname + '/data.txt', 'utf8');

// Affichage du contenu du fichier dans le terminal
console.log(fileContent);