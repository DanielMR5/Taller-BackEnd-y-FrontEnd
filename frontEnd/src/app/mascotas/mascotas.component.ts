import { Component, OnInit } from '@angular/core';
import { Mascota } from '../models/mascota'; // Asegúrate de que esta ruta sea correcta
import { MascotasService } from '../servicios/mascotas.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  mascotas: Mascota[] = [];
  nuevaMascota: Omit<Mascota, 'id'> = { nombre: '', raza: '', edad: 0 }; // Eliminar id de nuevaMascota

  constructor(private mascotasService: MascotasService) {}

  ngOnInit(): void {
    this.obtenerMascotas();
  }

  // Método para obtener la lista de mascotas
  obtenerMascotas(): void {
    this.mascotasService.getMascotas().subscribe(
      (data: Mascota[]) => {
        this.mascotas = data;
      },
      error => {
        console.error('Error al obtener mascotas', error);
      }
    );
  }

  // Método para agregar una nueva mascota
  agregarMascota(): void {
    this.mascotasService.createMascota(this.nuevaMascota).subscribe(
      (data: Mascota) => {
        this.mascotas.push(data); // Agregar la nueva mascota a la lista
        this.nuevaMascota = { nombre: '', raza: '', edad: 0 }; // Reiniciar el formulario
      },
      error => {
        console.error('Error al agregar mascota', error);
      }
    );
  }

  // Método para eliminar una mascota
  eliminarMascota(id: number): void {
    this.mascotasService.deleteMascota(id).subscribe(
      () => {
        this.mascotas = this.mascotas.filter(mascota => mascota.id !== id);
      },
      error => {
        console.error('Error al eliminar mascota', error);
      }
    );
  }

  // Método para actualizar una mascota
  actualizarMascota(mascota: Mascota): void {
    // Lógica para actualizar la mascota (puedes abrir un modal o similar)
    console.log('Actualizar mascota:', mascota);
  }

  // Método para solicitar una mascota
  solicitarMascota(id: number): void {
    // Lógica para manejar la solicitud de una mascota
    console.log('Solicitar mascota con ID:', id);
  }
}
