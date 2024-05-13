const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Contenu du répertoire courant : ")
  files.forEach(file => {
    if (fs.lstatSync(`./${file}`).isDirectory()) {
        console.log(file);
    }
  });
});
