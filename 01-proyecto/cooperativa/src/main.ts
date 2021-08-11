import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// para levantar el angular
// cooperativa/src/main.ts
// package.json
// ng serve (tener instalado el CLI de angular)
// npm run start
console.log("Hola mundo Adrian :)");
// Revisar la consola del navegador

// Mutables Inmutables

// Mutables
var nombre = 'Adrian'; // NUNCA USAR VAR
let nombreLet ='Adrian';
nombre = 'Vicente';
nombreLet = 'Vicente';
// Inmutables
const nombreConst = 'Adrian';
// nombreConst = 'Vicente'; X

// Tipos de variables (primitivas)
// Duck Typing

let numero = 1; // number
// let numero: number = 1; // number
// numero = 'Adrian'; No podemos asignar un string a un numero
const sueldo:number = 1.2;
const texto: string = 'Adrian';
// const texto: string = "Adrian";
const casado: boolean = false;
let hijos: any = null; // any -> CUALQUIER COSA
hijos = 12;
hijos = 'Uno';
hijos = true;
const zapatos: any = undefined; // any -> CUALQUIER COSA
console.log(typeof numero); // number
console.log(typeof sueldo); // number
console.log(typeof texto); // string
console.log(typeof hijos); // object
console.log(typeof zapatos); // undefined


console.log(typeof Number("asd")); // NaN-> number
console.log(Number("asd")); // NaN Not a number
// Number.isNaN()

// Truty Falsy

// true == true ok
// true == false no
// ===

if(""){
  console.log("Es truty string vacio");
}else{
  console.log("Es Falsy string vacio"); // Falsy
}
if("Adrian"){
  console.log("Es truty string vacio"); // Truty
}else{
  console.log("Es Falsy string vacio");
}

if(0){
  console.log("Es truty 0");
}else{
  console.log("Es Falsy 0"); // Falsy
}
if(-1){
  console.log("Es truty -1"); // truty
}else{
  console.log("Es Falsy -1");
}
if(1){
  console.log("Es truty 1"); // truty
}else{
  console.log("Es Falsy 1");
}



