const supabase = require('../config/supabase')

// OBTENER TODAS LAS CATEGORIAS
const getCategories = async () => {
    const { data, error } = await supabase
        .from('categorias')
        .select('*')
    if (error) {
        throw new Error(error.message)
    }
    return data
}

// OBTENER CATEGORIA POR ID
const getCategoryById = async (id) => {
    const { data, error } = await supabase
        .from('categorias')
        .select('*')
        .eq('id', id)
        .single()
    if (error) {
        throw new Error(error.message)
    }
    return data
}

module.exports = {
    getCategories,
    getCategoryById
}
