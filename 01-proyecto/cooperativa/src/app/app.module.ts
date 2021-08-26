import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNoEncontradoComponent } from './rutas/ruta-no-encontrado/ruta-no-encontrado.component';
import { LogeadoService } from './guards/logeado.service';
import { MostrarUsuarioComponent } from './componentes/mostrar-usuario/mostrar-usuario.component';
import { TodosRestModule } from './servicios/rest/todos-rest/todos-rest.module';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { FormularioTodoComponent } from './componentes/formulario-todo/formulario-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MenuModule} from 'primeng/menu';

@NgModule({ // Decorador
  declarations: [ // Declaramos los componentes de este modulo
    AppComponent,
    RutaLoginComponent,
    RutaNoEncontradoComponent,
    MostrarUsuarioComponent,
    RutaUsuarioComponent,
    FormularioTodoComponent
  ],
  imports: [ // Declaramos los modulos importados dentro de este modulo
    BrowserModule,
    AppRoutingModule,
    TodosRestModule,
    // import { ReactiveFormsModule } from '@angular/forms';
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    // import {MenuModule} from 'primeng/menu';
    MenuModule,
  ],
  providers: [ // Declaramos los servicios declarados en este modulo
    // LogeadoService
  ],
  bootstrap: [AppComponent] // Componente principal
})
export class AppModule { }
