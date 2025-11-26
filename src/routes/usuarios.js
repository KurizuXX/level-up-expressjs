const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

// listar usuarios
router.get('/', usuarioController.getAll);

// registrar usuario 
router.post('/', usuarioController.create);

// login
router.post('/login', usuarioController.login);

module.exports = router;