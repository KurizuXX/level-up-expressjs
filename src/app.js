const express = require('express');
const helmet = require("helmet")
const corsMiddleware = require('./middleware/corsMiddleware')

const app = express();

app.use(corsMiddleware)
app.use(helmet())
app.use(express.json())

app.use('/api/productos', require('./routes/products'))
app.use('/api/categorias', require('./routes/categories'))
app.use('/api/detalles-compra', require('./routes/detallesCompra'))
app.use('/api/usuarios', require('./routes/usuarios'))

app.use(require('./middleware/errorHandler'))

module.exports = app;