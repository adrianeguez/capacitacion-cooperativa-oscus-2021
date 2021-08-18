import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ // servicios
  providedIn: 'root'
})
// EsAdministrador
// EsAutorizadoDarCredito
// EsAdministradorODaCredito
// EstaLogeado
// EstaActivo
export class LogeadoService implements CanActivate {

  constructor() { }
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return false;// Boolean, Booleano promesa, Booleano Observable
  }
}
