const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LaPlateforme')
    .then(() => {
        console.log('Connected to MongoDB');

        // Vous pouvez ajouter le reste de votre logique ici
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
