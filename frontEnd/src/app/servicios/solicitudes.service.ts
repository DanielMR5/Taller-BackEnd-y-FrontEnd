// services/mascotas.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../models/mascota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  private apiUrl = 'http://localhost:3000/api/mascotas/'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.apiUrl}visualizarr`);
  }

  createMascota(mascota: Mascota): Observable<Mascota> {
    console.log("Servicio: creando mascota");
    return this.http.post<Mascota>(`${this.apiUrl}crear`, mascota); // Cambia a la ruta correcta para crear
  }

  updateMascota(id: number, mascota: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>(`${this.apiUrl}/${id}`, mascota);
  }

  deleteMascota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  solicitarMascota(id: number): Observable<void> {
    // Implementa la lógica para solicitar una mascota (si aplica)
    return this.http.post<void>(`${this.apiUrl}/solicitar/${id}`, {});
  }

  verSolicitudes(): Observable<any[]> {
    // Implementa la lógica para ver solicitudes
    return this.http.get<any[]>('http://localhost:3000/api/mascotas/visualizar'); // Reemplaza con tu URL de solicitudes
  }
}
