

import { Router } from 'express';
import {
  getMascotas,
  createMascota,
  updateMascota,
  deleteMascota,
} from '../controllers/mascotasController.js';

const router = Router();

// Rutas para mascotas
router.get('/visualizar', getMascotas); // GET visualizar todas las mascotas
router.post('/crear', createMascota); // POST crear una nueva mascota
router.put('/actualizar/:id', updateMascota); // PUT actualizar una mascota
router.delete('/borrar/:id', deleteMascota); // DELETE borrar una mascota
export default router;





