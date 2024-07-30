const {usuarios} = require('../bancodedados')

const listarUsuarios = async (req,res) => {
    return res.json(usuarios)
}

const cadastrarUsuario = async (req,res) => {
    const {nome,email,senha} = req.body
    if (!nome) {
        return res.status(400).json({mensagem: "O campo nome é obrigatorio"})
    }

    if (!email) {
        return res.status(400).json({mensagem: "O campo email é obrigatorio"})
    }

    if (!senha) {
        return res.status(400).json({mensagem: "O campo senhaé obrigatorio"})
    }
    
    const novoUsuario = {
        nome,
        email,
        senha
    }

    usuarios.push(novoUsuario)
    
    return res.status(201).json(novoUsuario)
}

module.exports = {
    cadastrarUsuario,
    listarUsuarios
}