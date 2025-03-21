const express=require('express');
const Router=express.Router();
const PrestamoController =require('../controllers/prestamoControllers');


Router.get("/prestamo",PrestamoController.ListarPrestamo);
Router.post("/insertarprestamo",PrestamoController.CrearPrestamo);
Router.delete("/eliminarprestamo/:id",PrestamoController.EliminarPrestamo);
Router.put("/actualizarprestamo/:id",PrestamoController.ActualizarPrestamo);



module.exports = Router;
