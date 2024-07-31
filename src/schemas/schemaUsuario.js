const joi = require('joi')

const schemaUsuario = joi.object({
    nome:joi.string().min(5).required().messages({
        'any.required': 'O campo nome é obrigatorio',
        'string.empty': 'O campo nome é obrigatorio',
    }),
    email:joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato valido',
        'any.required': 'O campo email é obrigatorio',
    }),
    senha:joi.string().min(5).required().messages({
        'any.required': 'O campo senha é obrigatorio',
        'string.min': ' A senha precisa conter, no minimo, 5 caracteres'
    })
})

module.exports = schemaUsuario