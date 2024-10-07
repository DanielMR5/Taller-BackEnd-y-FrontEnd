import SolicitudAdopcion from '../models/SolicitudAdopcion.js';

// Obtener todas las solicitudes de adopción
  
export const getSolicitudes = async (req, res) => {
  try {
    const solicitudes = await SolicitudAdopcion.findAll();
    res.json(solicitudes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener solicitudes', error });
  }
};

// Crear una nueva solicitud de adopción
export const createSolicitud = async (req, res) => {
  try {
    const { nombre_interesado, direccion, telefono, email } = req.body;
    const nuevaSolicitud = await SolicitudAdopcion.create({ nombre_interesado, direccion, telefono, email });
    res.status(201).json(nuevaSolicitud);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear solicitud', error });
  }
};
