// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './mascotas/mascotas.component';
import { VisualizarMascotasComponent } from './visualizar-mascotas/visualizar-mascotas.component';
import { TiendaComponent } from './tienda/tienda.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';

const routes: Routes = [
  // { path: 'mascotas', component: VisualizarMascotasComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'visualizar', component: VisualizarMascotasComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: '**', component: InicioComponent },
  { path: 'agregar', component: AgregarMascotaComponent },
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
