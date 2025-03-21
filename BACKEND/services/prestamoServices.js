const { where } = require('sequelize');
const { Prestamo } = require('../models');


class PrestamoService { 
    static async ObtenerPrestamo() {
        try {
            return await Prestamo.findAll();
        } catch (error) {
            console.log("Error al obtener prestamo:", error);
        }
    }

    static async CrearPrestamo(usuario_id,libro_id,fecha_prestamo,fechadevolucion, estado) {
        try {
        return await Prestamo.create({ usuario_id,libro_id,fecha_prestamo,fechadevolucion,estado});
        } catch (e) {
            console.log("Error en el servidor al guardar:", e);
        }
    }

    static async EliminarPrestamo(id) {    
        try {
            let resultadoB = await Prestamo.findByPk(id);
            if (resultadoB) {
                await resultadoB.destroy();
            } else {
                console.log("Prestamo no encontrado.");
            }
        } catch (e) {
            console.log("Error en el servidor al eliminar:", e);
        }
    }

    static async ActualizarPrestamo(id, datos) { 
        try {
            let actualizado = await Prestamo.update(datos, { where: { id } });
            return actualizado;
        } catch (e) {
            console.log("Error en el servidor al actualizar:", e);
        }
    }

   
}

module.exports = PrestamoService;
