const supabase = require('../config/supabase')

// OBTENER TODOS LOS PRODUCTOS
const getProducts = async (categoryId = null) => {
    let query = supabase
        .from('productos')
        .select('id, created_at, nombre, precio, imagen_url, descripcion, categoria:categorias(*)')
    
    if (categoryId) {
        query = query.eq('id_categoria', categoryId)
    }
    
    const { data, error } = await query
    if (error) {
        throw new Error(error.message)
    }
    return data
}

// OBTENER PRODUCTO POR ID
const getProductById = async (id) => {
    const { data, error } = await supabase
        .from('productos')
        .select('id, created_at, nombre, precio, imagen_url, descripcion, categoria:categorias(*)')
        .eq('id', id)
        .single()
    if (error) {
        throw new Error(error.message)
    }
    return data
}

module.exports = {
    getProducts,
    getProductById
}