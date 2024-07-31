const express = require('express')
const { cadastrarUsuario, listarUsuarios } = require('./controladores/usuarios')
const validarCorpoRequisicao = require('./intermediarios/validarCorpoRequisicao')
const schemaUsuario = require('./schemas/schemaUsuario')

const rotas = express()

rotas.post('/usuario',
validarCorpoRequisicao(schemaUsuario),
cadastrarUsuario)
rotas.get('/usario',listarUsuarios)

module.exports = rotas