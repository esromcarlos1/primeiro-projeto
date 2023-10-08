const bancodedados = require('../../bancodedados')

const listarUsuarios = (req, res) => {
    
   return res.status(200).json(bancodedados);
}

module.exports = {listarUsuarios};