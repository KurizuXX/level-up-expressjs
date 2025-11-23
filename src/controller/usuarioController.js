const usuarioService = require('../service/usuarioService')
const catchAsync = require('../utils/catchAsync');


const getUsuarios = catchAsync(async (req, res) => {
    const usuarios = await usuarioService.getUsuarios()
    res.status(200).json(usuarios)
})


const getUsuarioById = catchAsync(async (req, res) => {
    const { id } = req.params
    const usuario = await usuarioService.getUsuarioById(id)
    res.status(200).json(usuario)
})


module.exports = {
    getUsuarios,
    getUsuarioById
}
