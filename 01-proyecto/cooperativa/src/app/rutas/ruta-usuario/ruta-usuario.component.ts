import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(
    private readonly _activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute
    .params
    .subscribe(
      (parametros: any )=>{
        // 'usuario/:id'
        console.log('El id del usuario es: ', parametros.id);
      }
    )
  }

}
