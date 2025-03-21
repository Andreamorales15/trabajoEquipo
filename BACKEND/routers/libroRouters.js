const express=require('express');
const Router=express.Router();
const LibroController =require('../controllers/libroControllers');


Router.get("/libro",LibroController.ListarLibro);
Router.post("/insertarlibro",LibroController.CrearLibro);
Router.delete("/eliminarlibro/:id",LibroController.EliminarLibro);
Router.put("/actualizarlibro/:id",LibroController.ActualizarLibro);



module.exports = Router;
