import Mascota from '../models/Mascota.js';


export const getMascotas = async (req, res) => {

  try {
    const mascotas = await Mascota.findAll();
    console.log("mascotas")
    return res.send(mascotas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener mascotas', error });
  }
};

// Crear una nueva mascota
export const createMascota = async (req, res) => {
  try {
    const { nombre, raza, edad } = req.body;

    // Validación de datos
    if (!nombre || !raza || edad < 0) {
      return res.status(400).json({ message: 'Nombre, raza y edad son obligatorios y la edad debe ser un número positivo' });
    }

    const nuevaMascota = await Mascota.create({ nombre, raza, edad });
    res.status(201).json(nuevaMascota);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: 'Error de validación', error });
    }
    res.status(500).json({ message: 'Error al crear mascota', error });
  }
};




// Actualizar una mascota
export const updateMascota = async (req, res) => {
  const { id } = req.params;
  const { nombre, raza, edad } = req.body;
  
  try {
    const mascota = await Mascota.findByPk(id);
    if (!mascota) return res.status(404).json({ message: 'Mascota no encontrada' });

    await mascota.update({ nombre, raza, edad });
    res.json(mascota);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar mascota', error });
  }
};

// Eliminar una mascota
export const deleteMascota = async (req, res) => {
  const { id } = req.params;

  try {
    const mascota = await Mascota.findByPk(id);
    if (!mascota) return res.status(404).json({ message: 'Mascota no encontrada' });

    await mascota.destroy();
    res.status(204).send(); // Sin contenido
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar mascota', error });
  }
};

