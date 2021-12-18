// 1. Importaciones

const mongoose = require('mongoose');
const Book = require('../models/Book');

require('dotenv').config();

// 2. Conexión a base de datos

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 3. Establecer los datos para poblar la base de datos

const books = [
    {
        titulo: 'ANIMALES FANTASTICOS Y DONDE ENCONTRARLOS',
        autor: ['J. K. Rowling'],
        editorial: 'Salamandra',
        publicacion: '2010-06-03',
        descripcion:
            'Hay un ejemplar de Animales fantásticos y dónde encontrarlos en casi todos los hogares de magos del país. Ahora, también los muggles pueden descubrir dónde viven los quintapeds, qué come el puffskein y por qué es mejor no dejar leche fuera de casa para un knarl. Lo que se origine de la venta de este libro se destinará a Comic Relief, lo que significa que los euros, dólares o galeones que pagues por él producirán una magia que va más allá de los poderes de cualquier mago. Si consideras que ésta no es razón suficiente para desprenderte de tu dinero, sólo me queda confiar en que, si alguna vez te ataca una mantícora, los magos que anden cerca se sientan más caritativos.',
        isbn: '9788498382686',
        paginas: 64,
        categoria: ['Animals, Mythical'],
        imagen: {
            imagenc:
                'http://books.google.com/books/content?id=5b31swEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            imageng:
                'http://books.google.com/books/content?id=5b31swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        lenguaje: 'es',
    },
];

// 4. Poblar la base de datos

const createBookDB = async () => {
    const newBooks = await Book.create(books);

    // Cierre de conexión de Mongoose.

    mongoose.connection.close();
};

createBookDB();
