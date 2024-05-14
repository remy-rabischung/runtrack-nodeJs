const fs = require('fs');
const path = require('path');

const TASKS_FILE = path.join(__dirname, 'data.json');

const routes = {
  // Récupérer toutes les tâches de la liste
  '/tasks': {
    GET: (req, res) => {
      fs.readFile(TASKS_FILE, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Erreur lors de la lecture du fichier');
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(data);
        }
      });
    },
    // Créer une nouvelle tâche
      POST: (req, res) => {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          const newTask = JSON.parse(body);
          fs.readFile(TASKS_FILE, 'utf8', (err, data) => {
            if (err) {
              res.writeHead(500);
              res.end('Erreur lors de la lecture du fichier');
            } else {
              let tasks = JSON.parse(data).tasks;
              if (!Array.isArray(tasks)) {
                tasks = [];
              }
              tasks.push(newTask);
              // Convertir le tableau de tâches en objet JSON
              const updatedData = { tasks };
              fs.writeFile(TASKS_FILE, JSON.stringify(updatedData, null, 2), err => {
                if (err) {
                  res.writeHead(500);
                  res.end('Erreur lors de l\'écriture du fichier');
                } else {
                  res.writeHead(201, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify(newTask));
                }
              });
            }
          });
        });
      }
  },
  // Mettre à jour une tâche existante
  '/tasks/:id': {
    PUT: (req, res) => {
      const id = parseInt(req.url.split('/')[2]);
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const updatedTask = JSON.parse(body);
        fs.readFile(TASKS_FILE, 'utf8', (err, data) => {
          if (err) {
            res.writeHead(500);
            res.end('Erreur lors de la lecture du fichier');
          } else {
            let tasks = JSON.parse(data).tasks;
            const index = tasks.findIndex(task => task.id === id);
            if (index === -1) {
              res.writeHead(404);
              res.end('Tâche non trouvée');
            } else {
              tasks[index] = updatedTask;
              fs.writeFile(TASKS_FILE, JSON.stringify({ tasks: tasks }), err => {
                if (err) {
                  res.writeHead(500);
                  res.end('Erreur lors de l\'écriture du fichier');
                } else {
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify(updatedTask));
                }
              });
            }
          }
        });
      });
    }
  },
  // Supprimer une tâche existante
  '/tasks/:id': {
    DELETE: (req, res) => {
      const id = parseInt(req.url.split('/')[2]);
      fs.readFile(TASKS_FILE, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Erreur lors de la lecture du fichier');
        } else {
          let tasks = JSON.parse(data).tasks;
          const index = tasks.findIndex(task => task.id === id);
          if (index === -1) {
            res.writeHead(404);
            res.end('Tâche non trouvée');
          } else {
            tasks.splice(index, 1);
            fs.writeFile(TASKS_FILE, JSON.stringify({ tasks: tasks }), err => {
              if (err) {
                res.writeHead(500);
                res.end('Erreur lors de l\'écriture du fichier');
              } else {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ message: 'Tâche supprimée'}));
              }
            });
          }
        }
      });
    }
  }
};

module.exports = routes;
