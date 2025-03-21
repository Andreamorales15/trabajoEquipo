const UsuarioService = require("../services/usuarioServices.js");

class UsuarioController {
    static async ListarUsuarios(req, res) {
        try {
            let lista = await UsuarioService.obtenerUsuario();
            res.json(lista);
        } catch (e) {
            res.json({ error: "Error en la petición" });
        }
    }
    static async CrearUsuario(req, res) {
        try {
            let { nombre, correo, telefono } = req.body;
            let usuario = await UsuarioService.crearUsuario(nombre, correo, telefono);
            res.json(usuario);
        } catch (e) {
            res.json({ error: "Error en la petición" });
        }
    }
    static async EliminarUsuario(req, res) {
        try {
            const { id } = req.params;
            if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
            }
            let resultado = await UsuarioService.eliminarUsuario(id);

            if (!resultado) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }

            res.json({ mensaje: "Usuario eliminado correctamente" });
        } catch (e) {
            res.status(500).json({ error: "Error en el servidor al eliminar" });
        }
    }
    static async ActualizarUsuario(req, res) {
        try {
            const { id } = req.params;
            const { nombre, correo, telefono } = req.body;

            if (isNaN(id)) {
                return res.status(400).json({ error: "ID inválido" });
            }

            let resultado = await UsuarioService.actualizarUsuario(id, { nombre, correo, telefono });

            if (!resultado[0]) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }

            res.json({ mensaje: "Usuario actualizado correctamente" });
        } catch (e) {
            res.status(500).json({ error: "Error en el servidor al actualizar" });
        }
    }
}
module.exports = UsuarioController;
