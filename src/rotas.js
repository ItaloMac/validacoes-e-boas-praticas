const express = require('express')
const { cadastrarUsuario, listarUsuarios } = require('./controladores/usuarios')
const validarCorpoRequisicao = require('./intermediarios/validarCorpoRequisicao')

const rotas = express()

rotas.post('/usuario', validarCorpoRequisicao ,cadastrarUsuario)
rotas.get('/usario', listarUsuarios)

module.exports = rotas