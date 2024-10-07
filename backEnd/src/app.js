import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  // Importa cors
import sequelize from './config/db.js';
import mascotasRoutes from './routes/mascotas.js';
import solicitudesRoutes from './routes/solicitudes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

// Middleware para habilitar CORS
app.use(cors());  // Aplica cors a todas las rutas

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api/mascotas', mascotasRoutes);
app.use('/api/solicitudes', solicitudesRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Sincronizar la base de datos y arrancar el servidor
const startServer = async () => {
  try {
    await sequelize.sync(); // Sincroniza los modelos con la base de datos
    console.log('Base de datos sincronizada');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
};

startServer();
