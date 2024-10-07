import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../servicios/solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  solicitudes: any[] = [];
  nuevaSolicitud: any = {
    nombre_interesado: '',
    direccion: '',
    telefono: '',
    email: ''
  };

  constructor(private solicitudesService: SolicitudesService) {}

  ngOnInit(): void {
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    this.solicitudesService.getSolicitudes().subscribe((data) => {
      this.solicitudes = data;
    });
  }

  agregarSolicitud() {
    this.solicitudesService.addSolicitud(this.nuevaSolicitud).subscribe((data) => {
      this.solicitudes.push(data);
      this.nuevaSolicitud = { nombre_interesado: '', direccion: '', telefono: '', email: '' }; // Reiniciar el formulario
    });
  }
}
