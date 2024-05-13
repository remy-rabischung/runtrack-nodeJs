const path = require('path');

// Chemin d'accès complet au fichier
const filePath = __dirname + '/Job5/index.js';

// Récupération du nom du fichier
const fileName = path.basename(filePath);
console.log('Nom du fichier :', fileName);

// Récupération de l'extension du fichier
const fileExt = path.extname(filePath);
console.log('Extension du fichier :', fileExt);

// Récupération du répertoire parent du fichier
const parentDir = path.dirname(filePath);
console.log('Répertoire parent :', parentDir);