const usuarioService = require('../service/usuarioService');

exports.login = async (req, res) => {
  try {
    const { correo, password } = req.body; // correo = email del formulario

    if (!correo || !password) {
      return res.status(400).json({ message: 'Correo y contraseña son obligatorios' });
    }

    const user = await usuarioService.findByEmail(correo);

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // No devolvemos la contraseña
    res.json({
      id: user.id,
      nombre: user.nombre,
      correo: user.correo,
    });
  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};