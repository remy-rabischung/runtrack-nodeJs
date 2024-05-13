const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('Job13/index.html', 'utf8', (err, html) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    });
  } else if (req.url === '/about') {
    fs.readFile('Job13/about.html', 'utf8', (err, html) => {
      if (err) {
        throw err;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
});

server.listen(8888, () => {
  console.log('Serveur en écoute sur le port 8888...');
});
