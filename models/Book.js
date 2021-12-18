const mongoose = require('mongoose');

// 2. SCHEMA
const bookSchema = mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true,
        },
        autor: {
            type: [String],
            required: true,
        },
        paginas: {
            type: Number,
            required: true,
        },
        imagenc: {
            type: String,
            required: true,
        },
        imageng: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        lenguaje: {
            type: String,
            required: true,
        },
        publicacion: {
            type: String,
            required: true,
        },
        editorial: {
            type: String,
            required: true,
        },
        isbn: {
            type: String,
            required: true,
        },
        categoria: {
            type: [String],
            required: true,
        },
        cantidad: {
            type: String,
            required: true,
        },
        estatus: {
            type: String,
            required: true,
        },
        
        userCreator: {
            type: String,
            required: true,
        },
        usereserver: {
            type: [String],
            required: true,
        },
    },
    { timestamps: true },
);

// 3. MODELO
const Book = mongoose.model('Book', bookSchema);

// 4. EXPORTACIÓN
module.exports = Book;
