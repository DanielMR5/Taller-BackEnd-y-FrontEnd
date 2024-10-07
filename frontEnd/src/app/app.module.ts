// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { VisualizarMascotasComponent } from './visualizar-mascotas/visualizar-mascotas.component';
//import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MascotasService } from './servicios/mascotas.service';
import { InicioComponent } from './inicio/inicio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MascotasComponent,
    VisualizarMascotasComponent,
    InicioComponent,
    TiendaComponent,
    AgregarMascotaComponent
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(withFetch()), MascotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

