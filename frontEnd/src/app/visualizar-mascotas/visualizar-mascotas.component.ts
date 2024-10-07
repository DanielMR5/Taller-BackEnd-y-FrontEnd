import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../servicios/mascotas.service'; // Asegúrate de que la ruta sea correcta
import { Mascota } from '../models/mascota';

@Component({
  selector: 'app-visualizar-mascotas',
  templateUrl: './visualizar-mascotas.component.html',
  styleUrls: ['./visualizar-mascotas.component.css']
})
export class VisualizarMascotasComponent implements OnInit {
  mascotas: Mascota[] = []; // Cambiado a un array normal de tipo Mascota

  constructor(private mascotasService: MascotasService) { }

  ngOnInit() {
    // Carga la lista de mascotas al inicializar el componente
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.mascotasService.getMascotas().subscribe({
      next: (mascotas) => {
        this.mascotas = mascotas; // Asigna la lista de mascotas a la variable
      },
      error: (error) => {
        console.error('Error al cargar las mascotas:', error);
      }
    });
  }

  deleteMascota(id: number) {
    console.log('ID capturado:', id);
  
    this.mascotasService.deleteMascota(id).subscribe({
      next: () => {
        console.log('Mascota eliminada exitosamente');
        this.cargarMascotas(); // Recarga la lista de mascotas después de eliminar
      },
      error: (error) => {
        console.error('Error al eliminar la mascota:', error);
      }
    });
  }

  solicitarMascota(id: number): void {
    console.log(`Solicitando mascota con ID: ${id}`);
  }

  updateMascota(mascota: Mascota): void {
    console.log(`Actualizando mascota: ${JSON.stringify(mascota)}`);
  }

  addMascota(): void {
    console.log("Agregando nueva mascota");
  }
}