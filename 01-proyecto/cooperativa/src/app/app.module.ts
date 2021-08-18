import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNoEncontradoComponent } from './rutas/ruta-no-encontrado/ruta-no-encontrado.component';
import { LogeadoService } from './guards/logeado.service';
import { MostrarUsuarioComponent } from './componentes/mostrar-usuario/mostrar-usuario.component';

@NgModule({ // Decorador
  declarations: [ // Declaramos los componentes de este modulo
    AppComponent,
    RutaLoginComponent,
    RutaNoEncontradoComponent,
    MostrarUsuarioComponent
  ],
  imports: [ // Declaramos los modulos importados dentro de este modulo
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ // Declaramos los servicios declarados en este modulo
    // LogeadoService
  ],
  bootstrap: [AppComponent] // Componente principal
})
export class AppModule { }
