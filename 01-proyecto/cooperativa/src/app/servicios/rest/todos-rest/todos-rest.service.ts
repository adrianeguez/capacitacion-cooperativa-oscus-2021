import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodosRestModule } from './todos-rest.module';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { TodosInterface } from './interfaces/todos.interface';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: TodosRestModule
})
export class TodosRestService {

  url = environment.url;
  path = '/todos';

  // INYECCION DE DEPENDENCIAS
  constructor(
    private readonly _httpClient: HttpClient
  ) { 

  }

  obtenerTodos(): Observable<TodosInterface[]>{
    const urlCompleto = this.url + this.path;
    // import { map } from 'rxjs/operators'
    // return this._httpClient.get(urlCompleto)
    //    .pipe(map(a => a as TodosInterface[]));
    return this._httpClient
        .get(urlCompleto)
        .pipe( //  utilizar los metodos disponibles de los observables
          // map -> modificar la respuesta
          map(
            (datos: any)=>{
              const datosCambiados = datos.map(
                (dato: TodosInterface)=>{
                  if(dato.title){
                    dato.title = dato.title.toUpperCase()
                  }
                  return dato;
                }
              ) as TodosInterface[];
              return datosCambiados;
            }
          )
        )
  }
  obtenerUno(id:number): Observable<TodosInterface>{
    const urlCompleto = this.url + this.path + '/' + id;
    return this._httpClient.get(urlCompleto)
    .pipe(map(a => a as TodosInterface))
  }
  crearUno(todos:TodosInterface): Observable<TodosInterface>{
    const urlCompleto = this.url + this.path;
    return this._httpClient.post(urlCompleto, todos)
    .pipe(map(a => a as TodosInterface));
  }
  actualizarUno(todos:TodosInterface, id:number): Observable<TodosInterface>{
    const urlCompleto = this.url + this.path + '/' + id;
    return this._httpClient.put(urlCompleto, todos)
    .pipe(map(a => a as TodosInterface));
  }
  eliminarUno(id:number): Observable<void>{
    const urlCompleto = this.url + this.path + '/' + id;
    return this._httpClient.delete(urlCompleto)
    .pipe(map(a => a as any as void));

  }

}
