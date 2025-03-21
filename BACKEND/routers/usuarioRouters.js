const express=require('express');
const Router=express.Router();
const UsuarioController =require('../controllers/usuarioControllers');


Router.get("/usuario",UsuarioController.ListarUsuarios);
Router.post("/insertarusuario",UsuarioController.CrearUsuario);
Router.delete("/eliminarusuario/:id",UsuarioController.EliminarUsuario);
Router.put("/actualizarusuario/:id",UsuarioController.ActualizarUsuario);



module.exports = Router;
