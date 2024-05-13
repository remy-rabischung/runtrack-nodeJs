const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('Job12/index.html', 'utf8', (err, html) => {
    if (err) {
      throw err;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  });
});

server.listen(8888, () => {
  console.log('Serveur en écoute sur le port 8888...');
});
