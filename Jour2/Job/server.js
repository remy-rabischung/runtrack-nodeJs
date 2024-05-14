const http = require('http');
const url = require('url');
const routes = require('./routes');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  if (routes[path] && routes[path][method]) {
    routes[path][method](req, res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

module.exports = server;
