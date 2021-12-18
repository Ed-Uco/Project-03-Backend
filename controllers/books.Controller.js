//Import
const Book = require('../models/Book');

exports.create = async (req, res) => {
    //Del form - creamos variables y asignamos valores.
    const {
        titulo,
        autor,
        paginas,
        imagenc,
        imageng,
        descripcion,
        lenguaje,
        publicacion,
        editorial,
        isbn,
        categoria,
        cantidad,
        estatus,
        userCreator,
        timestamps,
    } = req.body;

    //Crear Libro en BD
    try {
        const newBook = await Book.create({
            titulo,
            autor,
            paginas,
            imagenc,
            imageng,
            descripcion,
            lenguaje,
            publicacion,
            editorial,
            isbn,
            categoria,
            cantidad,
            estatus,
            userCreator,
            timestamps,
        });

        //Devolver una respuesta en un formato json
        res.json({
            msg: 'Libro creado con exito',
            data: newBook,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Hubo un error creando el libro',
            error,
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const books = await Book.find({});

        res.json({
            msg: 'Libros obtenidos con éxito.',
            data: books,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Hubo un error obteniendo los datos',
            error: error,
        });
    }
};

exports.readOne = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findById(id);

        res.json({
            msg: 'Libro obtenido con éxito.',
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'hubo un error obteniendo los datos.',
            error: error,
        });
    }
};

//-------------------EDIT-------------------
exports.edit = async (req, res) => {
    const { id } = req.params;

    const {
        titulo,
        autor,
        paginas,
        imagenc,
        imageng,
        descripcion,
        lenguaje,
        publicacion,
        editorial,
        isbn,
        categoria,
        cantidad,
        estatus,
        userCreator,
        timestamps,
    } = req.body;

    try {
        const updateBook = await Book.findByIdAndUpdate(
            id,
            {
                titulo,
                autor,
                paginas,
                imagenc,
                imageng,
                descripcion,
                lenguaje,
                publicacion,
                editorial,
                isbn,
                categoria,
                cantidad,
                  estatus,
                  userCreator,
                timestamps,
            },
            { new: true },
        );

        res.json({
            msg: 'Libro actualizado con exito',
            data: updateBook,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'hubo un error obteniendo los datos.',
            error: error,
        });
    }
};

//-------------------BORRAR-------------------
exports.delete = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await Book.findByIdAndRemove({ _id: id });

        res.json({
            msg: 'Libro borrado con éxito.',
            data: deletedBook,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Hubo un error borrando el libro.',
            error: error,
        });
    }
};
