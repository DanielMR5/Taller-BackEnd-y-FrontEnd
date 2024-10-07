
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const SolicitudAdopcion = sequelize.define('SolicitudAdopcion', {
  nombre_interesado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false
});

export default SolicitudAdopcion;

