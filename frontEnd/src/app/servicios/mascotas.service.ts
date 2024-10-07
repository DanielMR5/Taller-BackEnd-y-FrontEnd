// services/mascotas.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../models/mascota';
import { Observable } from 'rxjs';

// Definir un conjunto de imágenes
const imagenes = [
  'https://img.freepik.com/fotos-premium/diseno-vidriera-dibujos-animados-perros-pod-impresion-demanda-fondo-blanco_727137-12980.jpg',
  'https://img.freepik.com/fotos-premium/diseno-vidriera-dibujos-animados-gatos-pod-impresion-demanda-fondo-blanco_727137-12981.jpg',
  'https://img.freepik.com/fotos-premium/dibujo-anime-adorable-gato-encima-arbol_24640-84935.jpg',
  'https://img.freepik.com/fotos-premium/dibujo-animado-gato-con-anteojos-vestido_24143-1221.jpg',
  // Agrega más imágenes aquí
];

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
   apiUrl = 'http://localhost:3000/api/mascotas/'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getMascotas():Observable<any> {
    console.log("servicio arriba")
    return this.http.get<Mascota[]>(`${this.apiUrl}visualizar`);

  }

  // createMascota(mascota: Mascota): Observable<Mascota> {
  //   return this.http.post<Mascota>(this.apiUrl, mascota);
  // }
  createMascota(mascota: Mascota): Observable<Mascota> {
    const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    const nuevaMascota = { ...mascota, imagen: imagenAleatoria }; // Asigna la imagen aleatoria
    return this.http.post<Mascota>(`${this.apiUrl}/crear`, nuevaMascota); // Asegúrate de que el backend soporte la propiedad 'imagen'
  }

  updateMascota(id: number, mascota: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>(`${this.apiUrl}/${id}`, mascota);
    

  }

  deleteMascota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}borrar/${id}`);
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  solicitarMascota(id: number): Observable<void> {
    // Implementa la lógica para solicitar una mascota (si aplica)
    return this.http.post<void>(`${this.apiUrl}/solicitar/${id}`, {});
  }

}
