const detalleCompraService = require('../service/detalleCompraService')
const catchAsync = require('../utils/catchAsync');


const getDetallesCompra = catchAsync(async (req, res) => {
    const detalles = await detalleCompraService.getDetallesCompra()
    res.status(200).json(detalles)
})


const getDetalleCompraById = catchAsync(async (req, res) => {
    const { id } = req.params
    const detalle = await detalleCompraService.getDetalleCompraById(id)
    res.status(200).json(detalle)
})


module.exports = {
    getDetallesCompra,
    getDetalleCompraById
}
