const { z } = require('zod');

const productSchema = z.object({
    nombre: z.string()
        .min(1, 'El nombre es obligatorio')
        .max(255, 'El nombre no puede exceder 255 caracteres'),
    
    precio: z.number()
        .positive('El precio debe ser mayor a 0')
        .or(z.string().transform((val) => parseFloat(val))),
    
    id_categoria: z.number()
        .int('El id_categoria debe ser un número entero')
        .positive('El id_categoria debe ser mayor a 0')
        .or(z.string().transform((val) => parseInt(val))),
    
    descripcion: z.string()
        .min(1, 'La descripción es obligatoria')
        .max(500, 'La descripción no puede exceder 500 caracteres'),
    
    stock: z.number()
        .int('El stock debe ser un número entero')
        .min(1, 'El stock debe ser al menos 1')
        .max(50, 'El stock no puede exceder 50')
        .or(z.string().transform((val) => parseInt(val))),
    
    imagen_url: z.string()
        .url('La URL de la imagen debe ser válida')
        .optional()
        .nullable(),
    
    disponible: z.boolean()
        .optional()
        .default(true)
});

function validateProduct(data) {
    return productSchema.parse(data);
}

module.exports = {
    validateProduct 
};
