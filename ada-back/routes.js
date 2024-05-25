// routes.js

const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router.get('/users', userController.getAllUsers);
// Ajouter d'autres routes selon vos besoins

module.exports = router;
