const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('Job14/index.html', 'utf8', (err, html) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    });
  } else if (req.url === '/about') {
    fs.readFile('Job14/about.html', 'utf8', (err, html) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    });
  } else {
    const filePath = path.join(__dirname, 'error.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        throw err;
      }
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
});

server.listen(8888, () => {
  console.log('Serveur en écoute sur le port 8888...');
});
