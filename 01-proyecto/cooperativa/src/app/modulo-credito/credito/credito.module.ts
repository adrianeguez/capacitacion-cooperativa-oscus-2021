import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditoRoutingModule } from './credito-routing.module';
import { RutaCreditoComponent } from './rutas/ruta-credito/ruta-credito.component';


@NgModule({
  declarations: [
    RutaCreditoComponent
  ],
  imports: [
    CommonModule,
    CreditoRoutingModule
  ]
})
export class CreditoModule { }
