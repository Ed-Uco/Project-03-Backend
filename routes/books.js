//1. Import
const express = require('express');
const router = express.Router();

const bookController = require('./../controllers/books.Controller');

//2. Ruteo (Router)
//Crear Libro
router.post('/create', bookController.create);

// LEER LIBROS
router.get('/readall', bookController.readAll);

//Leer una libro
router.get("/readone/:id", bookController.readOne);

//Actualizar libro
router.put("/edit/:id", bookController.edit)

//Delete libro
router.delete("/delete/:id", bookController.delete)


//Exportaciones
module.exports = router









router.get('/readone/:id', bookController.readOne);

//Actualizar guitarra
router.put('/edit/:id', bookController.edit);

//Delete guitarra
router.delete('/delete/:id', bookController.delete);

//Exportaciones
module.exports = router;
