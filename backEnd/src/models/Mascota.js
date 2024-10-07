
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Mascota = sequelize.define('Mascota', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  raza: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false
});

export default Mascota;

