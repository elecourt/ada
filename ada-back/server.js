const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware pour parser le JSON
app.use(express.json());

// Définir les routes
const routes = require('./routes');
app.use('/api', routes);

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).send('404 - Not Found');
});

// Gestion des erreurs serveur
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 - Internal Server Error');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
