const bancodedados = require('../../bancodedados');

let idConta = 1;

const cadastrarUsuario = (req, res) => {
    
    const { nome, telefone, email } = req.body;
    
    if (!nome || !telefone || !email) {
    
        return res.status(400).json( {mensagem: 'O todos os campos são obrigatórios'});
    }

    const contaNova = {
        id: idConta++,
        nome,
        telefone,
        email
    }

    bancodedados.push(contaNova);
    
    res.status(201).json({mensagem: 'Cadastro realizado com sucesso'});

}

module.exports = {cadastrarUsuario};