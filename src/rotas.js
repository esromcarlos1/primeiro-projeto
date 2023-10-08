const express = require('express');
const { cadastrarUsuario } = require('./controladores/cadastrarUsuario');
const { listarUsuarios } = require('./controladores/listarUsuarios');
const { buscarUsuario } = require('./controladores/buscarUsuario');

const rotas = express();

rotas.post('/user', cadastrarUsuario);
rotas.get('/user', listarUsuarios);
rotas.get('/user/:id', buscarUsuario);

module.exports = rotas;