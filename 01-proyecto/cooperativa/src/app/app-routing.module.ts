import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogeadoService } from './guards/logeado.service';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNoEncontradoComponent } from './rutas/ruta-no-encontrado/ruta-no-encontrado.component';
// 4200:/#/ -> /login  __  4200:/#/alksdfjlaskdfj -> /no-encontrado
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  { //modulo-finanzas/finanzas
    canActivate: [ // GUARDS
      LogeadoService
    ],
    path: 'modulo-finanzas', // modulo-finanzas
    loadChildren: ()=> import('./modulo-finanzas/finanzas/finanzas.module')
    .then( m => m.FinanzasModule)
  },
  {//modulo-credito/credito
    path: 'modulo-credito', // modulo-credito
    loadChildren: ()=> import('./modulo-credito/credito/credito.module')
    .then( m => m.CreditoModule)
  },
  {
    path: 'no-encontrado',
    component: RutaNoEncontradoComponent
  },
  {
    path: '**',
    redirectTo: '/no-encontrado'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// /app/modulo-finanzas -> $ ng generate module finanzas --routing
// /app/modulo-credito -> $ ng generate module credito --routing


// /credito/rutas -> $ ng generate component ruta-credito
// /finanzas/rutas -> $ ng generate component ruta-finanzas

// /guards -> ng generate service logeado

// /componentes -> ng generate component mostrar-usuario
