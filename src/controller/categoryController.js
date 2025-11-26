const categoryService = require('../service/categoryService')
const catchAsync = require('../utils/catchAsync');


const getCategories = catchAsync(async (req, res) => {
    const categories = await categoryService.getCategories()
    res.status(200).json(categories)
})


const getCategoryById = catchAsync(async (req, res) => {
    const { id } = req.params
    const category = await categoryService.getCategoryById(id)
    res.status(200).json(category)
})


module.exports = {
    getCategories,
    getCategoryById
}
