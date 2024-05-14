const routes = {
    // Récupérer toutes les tâches de la liste
    '/tasks': {
      GET: (req, res) => {
        // Code pour récupérer toutes les tâches de la liste
      }
    },
    // Créer une nouvelle tâche
    '/tasks': {
      POST: (req, res) => {
        // Code pour créer une nouvelle tâche
      }
    },
    // Mettre à jour une tâche existante
    '/tasks/:id': {
      PUT: (req, res) => {
        // Code pour mettre à jour une tâche existante
      }
    },
    // Supprimer une tâche existante
    '/tasks/:id': {
      DELETE: (req, res) => {
        // Code pour supprimer une tâche existante
      }
    }
  };
  
  module.exports = routes;
  