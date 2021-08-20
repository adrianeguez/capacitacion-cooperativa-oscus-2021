import { Component, OnInit } from '@angular/core';
import { TodosRestService } from '../../servicios/rest/todos-rest/todos-rest.service';
import { TodosInterface } from '../../servicios/rest/todos-rest/interfaces/todos.interface';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostrarPrimerComponente = true;

  usuarios = [
    {
      nombre: 'Adrian',
      imagen: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
      descripcion: 'Descripcion 1',
    },
    {
      nombre: 'Vicente',
      imagen: 'https://3.bp.blogspot.com/-JfL1o7oSnKI/VmodObHF9cI/AAAAAAAABLY/nKKRXw0-yiU/s1600/homero_456_336.jpg',
      descripcion: 'Descripcion 2',
    },
    {
      nombre: 'Carolina',
      imagen: 'https://3.bp.blogspot.com/-JfL1o7oSnKI/VmodObHF9cI/AAAAAAAABLY/nKKRXw0-yiU/s1600/homero_456_336.jpg',
      descripcion: 'Descripcion 3',
    }
  ]

  todos: TodosInterface[] = [];

  // Inyeccion de dependencias
  constructor(
    private readonly _todosRestService: TodosRestService
  ) { }

  ngOnInit(): void {
    // $ => Observable
    const todos$ = this._todosRestService
        .obtenerTodos();
    todos$
      .subscribe(
        (todos)=>{ // TRY
          this.todos = todos;
          console.log(this.todos);
        },
        (error)=>{ // CATCH
          console.error({
            error,
            mensaje: 'Error consultando to dos'
          });
        }
      );
  }

}
