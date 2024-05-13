const url = require('url');

// Définition de l'URL
const myUrl = 'https://www.google.com/search?q=nodejs';

// Analyse de l'URL
const parsedUrl = url.parse(myUrl);

// Récupération des informations demandées
const protocol = parsedUrl.protocol;
const hostname = parsedUrl.hostname;
const searchParams = new URLSearchParams(parsedUrl.search);

// Reformatage de l'URL en une nouvelle URL valide
const newUrl = new URL('https://www.laplateforme.io');

// Ajout d'un paramètre à la nouvelle URL
newUrl.searchParams.append('lang', 'Fr');

// Affichage de la nouvelle URL dans le terminal
console.log("Le protocole est https :")
console.log("Nouvelle URL : " , newUrl.toString());
