const mongoose = require('mongoose');

// 2. SCHEMA
const reservationSchema = mongoose.Schema(
    {
        email: {
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
