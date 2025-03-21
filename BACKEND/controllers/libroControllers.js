const LibroService = require("../services/libroServices");

class LibroController {
    static async ListarLibro(req, res) {
        try {
            let lista = await LibroService.obtenerLibro();
            res.json(lista);
        } catch (e) {
            res.json({ error: "Error en la petición" });
        }
    }
    static async CrearLibro(req, res) {
        try {
            let { titulo, autor, aniopublic, stock } = req.body;
            let usuario = await LibroService.crearLibro( titulo, autor, aniopublic, stock);
            res.json(usuario);
        } catch (e) {
            res.json({ error: "Error en la petición" });
        }
    }
    static async EliminarLibro(req, res) {
        try {
            const { id } = req.params;
            if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
            }
            let resultado = await LibroService.eliminarLibro(id);

            if (!resultado) {
                return res.status(404).json({ error: "Libro no encontrado" });
            }

            res.json({ mensaje: "Libro eliminado correctamente" });
        } catch (e) {
            res.status(500).json({ error: "Error en el servidor al eliminar" });
        }
    }
    static async ActualizarLibro(req, res) {
        try {
            const { id } = req.params;
            const {titulo, autor, aniopublic, stock} = req.body;

            if (isNaN(id)) {
                return res.status(400).json({ error: "ID inválido" });
            }

            let resultado = await LibroService.actualizarLibro(id, {titulo, autor, aniopublic, stock});

            if (!resultado[0]) {
                return res.status(404).json({ error: "Libro no encontrado" });
            }

            res.json({ mensaje: "Libro actualizado correctamente" });
        } catch (e) {
            res.status(500).json({ error: "Error en el servidor al actualizar" });
        }
    }
}
module.exports =  LibroController;
