'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prestamo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prestamo.belongsTo(models.Libro, {foreignKey:'libro_id', as:'libro',})
      Prestamo.belongsTo(models.Usuario, {foreignKey:'usuario_id', as:'usuario',})
    }
  }
  Prestamo.init({
    usuario_id: DataTypes.INTEGER,
    libro_id: DataTypes.INTEGER,
    fecha_prestamo: DataTypes.DATE,
    fechadevolucion: DataTypes.DATE,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prestamo',
    timestamps: true 
  });
  return Prestamo;
};