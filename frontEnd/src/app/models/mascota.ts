export interface Mascota {
  id?: number; // Asegúrate de que 'id' sea parte de la interfaz
  nombre: string;
  raza: string;
  edad: number;
  imagenUrl?: string; // Puede ser opcional si no siempre está presente
  imagen?: string; // Agregar esta línea
}
