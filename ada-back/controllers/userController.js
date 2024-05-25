const User = require('../models/user.js');

// Obtenir tous les utilisateurs
exports.getAllUsers = (req, res) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(err => console.log(err));
};

// Créer un nouvel utilisateur
exports.createUser = (req, res) => {
  const { name, firstname, business, address, mail, phone, package, iban, siret, photo, password } = req.body;
  User.create({ name, firstname, business, address, mail, phone, package, iban, siret, photo, password })
    .then(user => res.status(201).json(user))
    .catch(err => console.log(err));
};

// Obtenir un utilisateur par son ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      res.json(user);
    })
    .catch(err => console.log(err));
};

// Mettre à jour un utilisateur
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, firstname, business, address, mail, phone, package, iban, siret, photo, password } = req.body;
  User.update({ name, firstname, business, address, mail, phone, package, iban, siret, photo, password }, { where: { ID: id } })
    .then(() => res.status(200).json({ message: "Utilisateur mis à jour avec succès" }))
    .catch(err => console.log(err));
};

// Supprimer un utilisateur
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.destroy({ where: { ID: id } })
    .then(() => res.status(204).json({ message: "Utilisateur supprimé avec succès" }))
    .catch(err => console.log(err));
};
