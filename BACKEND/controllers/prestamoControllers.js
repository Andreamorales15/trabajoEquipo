const PrestamoService = require("../services/prestamoServices");

class PrestamoController {
    static async ListarPrestamo(req, res) {
        try {
            let lista = await PrestamoService.ObtenerPrestamo();
            res.json(lista);
        } catch (e) {
            res.json({ error: "Error en la petición" });
        }
    }
    static async CrearPrestamo(req, res) {
        try {
            let {usuario_id,libro_id,fecha_prestamo,fechadevolucion,estado } = req.body;
            let usuario = await PrestamoService.CrearPrestamo( usuario_id,libro_id, fecha_prestamo,fechadevolucion,estado);
            res.json(usuario);
        } catch (e) {
            res.json({ error: "Error en la petición" });
        }
    }
    static async EliminarPrestamo(req, res) {
        try {
            const { id } = req.params;
            if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
            }
            let resultado = await PrestamoService.EliminarPrestamo(id);

            if (!resultado) {
                return res.status(404).json({ error: "Prestamo no encontrado" });
            }

            res.json({ mensaje: "Prestamo eliminado correctamente" });
        } catch (e) {
            res.status(500).json({ error: "Error en el servidor al eliminar" });
        }
    }
    static async ActualizarPrestamo(req, res) {
        try {
            const { id } = req.params;
            const { usuario_id, libro_id, fecha_prestamo, fechadevolucion, estado } = req.body;

            if (isNaN(id)) {
                return res.status(400).json({ error: "ID inválido" });
            }

            let resultado = await PrestamoService.ActualizarPrestamo(id, {usuario_id, libro_id, fecha_prestamo, fechadevolucion, estado});

            if (!resultado[0]) {
                return res.status(404).json({ error: "Prestamo no encontrado" });
            }

            res.json({ mensaje: "Prestamo actualizado correctamente" });
        } catch (e) {
            res.status(500).json({ error: "Error en el servidor al actualizar" });
        }
    }
}
module.exports = PrestamoController;
