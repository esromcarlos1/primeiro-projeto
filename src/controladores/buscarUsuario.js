const bancodedados = require('../../bancodedados')

const buscarUsuario = (req, res) => {
    const {id} = req.params;

    const usuario = bancodedados.find((elemento) => {
        return elemento.id === Number(id);
    })

    if (!usuario) {
        return res.status(404).json({mensagem: 'Usuário não encontrado.'})
    }
    
    return res.status(200).json(usuario);
}

module.exports = {buscarUsuario};