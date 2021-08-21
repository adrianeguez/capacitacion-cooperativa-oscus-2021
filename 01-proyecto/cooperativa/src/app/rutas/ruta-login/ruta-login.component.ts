import { Component, OnInit } from '@angular/core';
import { TodosRestService } from '../../servicios/rest/todos-rest/todos-rest.service';
import { TodosInterface } from '../../servicios/rest/todos-rest/interfaces/todos.interface';
import { Router } from '@angular/router';

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
    private readonly _todosRestService: TodosRestService,
    // import { Router } from '@angular/router';
    private readonly _router: Router,
  ) { }

  navegarARutaUsuario(id?:number){
    if(id){
      const ruta = ['/usuario', id];
      this._router.navigate(ruta);
    }
  }



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

  crearNuevoTodo(){
    const nuevoTodo$ = this._todosRestService
      .crearUno({
        title: 'Nuevo',
        completed: true,
        userId: 1
      });
      // bloqueamos pantalla
    nuevoTodo$
      .subscribe(
        (nuevoTodo)=>{
          // desbloqueamos pantalla
          this.todos.unshift(nuevoTodo);
        },
        (error)=>{
          // desbloqueamos pantalla
          console.error({mensaje:'Error todo', error});
        }
      );
  }

  eliminarTodo(id?:number){
    if(id){
      const todoEliminado$ = this._todosRestService
      .eliminarUno(id);
      todoEliminado$
        .subscribe(
          ()=>{
            console.info({mensaje:'Todo eliminado'});
            const indice = this.todos.findIndex(t => t.id === id);
            if(indice){
              this.todos.splice(indice, 1);
            } 
          },
          (error)=>{
            console.error({error, mensaje: 'Error eliminando todo'})
          }
        );
    }
    
  }

  editarTodo(id?:number){
    if(id){
      this._todosRestService.actualizarUno({
        completed: true,
        title: 'EDITADO'
      }, id)
      .subscribe(
        (todoActualizado)=>{
          const indice = this.todos.findIndex(t=> t.id === id);
          if(indice){
            this.todos[indice] = todoActualizado;
          }
        },
        (error)=>{
          console.error({error, mensaje:'No se pudo editar todo'});
        }
      )
    }
  }

}
