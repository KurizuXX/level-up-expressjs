// src/service/usuarioService.js
const supabase = require('../config/supabase');

// =========================
// OBTENER TODOS LOS USUARIOS
// =========================
const getUsuarios = async () => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data; 
};

// =========================
// OBTENER USUARIO POR ID
// =========================
const getUsuarioById = async (id) => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data; // un usuario o null
};

// =========================
// BUSCAR USUARIO POR CORREO
// (para login)
// =========================
const findByEmail = async (correo) => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('correo', correo)
    .single();

  if (error) {
    if (error.code === 'PGRST116' || error.details?.includes('Results contain 0 rows')) {
      return null;
    }
    throw new Error(error.message);
  }

  return data; // usuario o null
};

// =========================
// CREAR USUARIO (registro)
// =========================
const createUsuario = async ({ nombre, correo, password }) => {
  const { data, error } = await supabase
    .from('usuarios')
    .insert([
      {
        nombre,
        correo,
        password,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data; // usuario creado
};

module.exports = {
  getUsuarios,
  getUsuarioById,
  findByEmail,
  createUsuario,
};
