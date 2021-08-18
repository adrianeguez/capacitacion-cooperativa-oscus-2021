import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-usuario', // <app-mostrar-usuario></app-mostrar-usuario>
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.scss']
})
export class MostrarUsuarioComponent implements OnInit, OnDestroy {

  nombre = 'Adrian';
  numero = 1;
  casado = false;
  objeto = {nombre:'Vicente'};
  arreglo = [1, 2, 3, 4];

  constructor() { 
    // NO PONEMOS LOGICA
  }

  ngOnInit(): void {
    // Inicializacion de la ruta EJ: llamamos a los datos iniciales
    console.log('OnInit');
  }

  ngOnDestroy(): void {
    // Limpiar variables
    console.log('OnDestroy');
  }

}
