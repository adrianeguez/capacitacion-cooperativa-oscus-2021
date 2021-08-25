import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-usuario', // <app-mostrar-usuario [usuario]="usuario"></app-mostrar-usuario>
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.scss']
})
export class MostrarUsuarioComponent implements OnInit, OnDestroy {

  nombre = 'Adrian';
  numero = 1;
  casado = false;
  objeto = {nombre:'Vicente'};
  arreglo = [1, 2, 3, 4];

  @Input()
  usuario = {
    nombre: 'Adrian',
    imagen: 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg',
    descripcion: 'Figura de una persona o cosa captada por el ojo, por un espejo, un aparato',
  }

  constructor() { 
    // NO PONEMOS LOGICA
  }

  ngOnInit(): void {
    // Inicializacion de la ruta EJ: llamamos a los datos iniciales
    console.log('OnInit');
  }

  cambiarImagen(
    evento: any,
    usuario: any,
    ){
    console.log(evento);
    console.log(usuario);

    if(usuario.imagen === 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'){
      usuario.imagen = 'https://3.bp.blogspot.com/-JfL1o7oSnKI/VmodObHF9cI/AAAAAAAABLY/nKKRXw0-yiU/s1600/homero_456_336.jpg';
    }else{
      usuario.imagen = 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg';
    }
  }


  ngOnDestroy(): void {
    // Limpiar variables
    console.log('OnDestroy');
  }

}
// /src/app/componentes/
// ng generate component formulario-todo

