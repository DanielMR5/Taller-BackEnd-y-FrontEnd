import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotasService } from '../servicios/mascotas.service';
import { Router } from '@angular/router'; // Asegúrate de importar Router

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit {
  mascotaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mascotasService: MascotasService,
    private router: Router // Inyecta Router aquí
  ) {
    this.mascotaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      // Añade otros campos según sea necesario
    });
  }

  ngOnInit(): void { }

  agregarMascota(): void {
    if (this.mascotaForm.valid) {
      this.mascotasService.createMascota(this.mascotaForm.value).subscribe({
        next: (respuesta) => {
          console.log('Mascota agregada:', respuesta);
          // Redirige a la página de visualizar mascotas
          this.router.navigate(['/visualizar']); // Esto redirige a la ruta visualizar
        },
        error: (error) => {
          console.error('Error al agregar mascota:', error);
        }
      });
    }
  }
}
