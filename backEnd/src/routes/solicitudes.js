import { Router } from 'express';
import {
  getSolicitudes,
  createSolicitud,
} from '../controllers/solicitudesController.js';

const router = Router();

// Rutas para solicitudes de adopción
router.get('/visualizar', getSolicitudes); // GET visualizar todas las solicitudes
router.post('/crear', createSolicitud); // POST crear una nueva solicitud

export default router;

