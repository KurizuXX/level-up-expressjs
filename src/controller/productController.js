const productService = require('../service/productService')

const getProducts = async (req, res) => {
    try {
        const { categoria } = req.query
        const products = await productService.getProducts(categoria)
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await productService.getProductById(id)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getProducts,
    getProductById
}