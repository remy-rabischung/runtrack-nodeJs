// Importation de Mongoose
const mongoose = require('mongoose');

// Définition du schéma pour la collection "student"
const studentSchema = new mongoose.Schema({
    id: Number,
    lastname: String,
    firstname: String,
    students_number: String,
    year_id: Number
});

// Définition du schéma pour la collection "year"
const yearSchema = new mongoose.Schema({
    year: Number
});

// Création des modèles pour les collections
const Student = mongoose.model('Student', studentSchema);
const Year = mongoose.model('Year', yearSchema);

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/LaPlateforme', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        
        // Insérer des données dans la collection "student"
        Student.insertMany([
            { id: 1, lastname: "Doe", firstname: "John", students_number: "12345", year_id: 1 },
            { id: 2, lastname: "Smith", firstname: "Alice", students_number: "54321", year_id: 2 }
            // Ajouter d'autres données d'étudiants si nécessaire
        ]).then(() => {
            console.log("Student data inserted");
        }).catch(err => {
            console.error("Error inserting student data:", err);
        });

        // Insérer des données dans la collection "year"
        Year.insertMany([
            { year: 2022 },
            { year: 2023 }
            // Ajouter d'autres données d'année si nécessaire
        ]).then(() => {
            console.log("Year data inserted");

            // Fermer la connexion à la base de données une fois que les données sont insérées
            mongoose.connection.close();
        }).catch(err => {
            console.error("Error inserting year data:", err);
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
