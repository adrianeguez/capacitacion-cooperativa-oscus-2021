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
if(null){
  console.log("Es truty");
}else{
  console.log("Es Falso"); // Falsy
}
if(undefined){
  console.log("Es truty");
}else{
  console.log("Es Falso");  // Falsy
}

// Orden de importancia
// 1) "const"
// 2) "let"
// 3) X -> "var"

// Objetos js (JSON) - arreglo (object)

const adrian = {
  nombre: 'Adrian',
  apellido: 'Eguez',
  edad: 32,
  hijos: null,
  zapatos: undefined,
  casado: false,
  ropa: {
    color: 'plomo',
    talla: 40
  },
  mascotas: ['Cachetes', 'Panda', 'Pecas'],
};

adrian.nombre; // 'Adrian'
adrian['nombre']; // 'Adrian'
console.log(adrian.nombre);
adrian.ropa; // {...}
adrian.ropa.color; // plomo
adrian['ropa']['color'];
adrian.ropa['color'];
adrian['ropa'].color;
/*
  // Codificacion Defensiva

  if(adrian.ropa){
    // no existe la propiedad ropa en undefined
    if(adrian.ropa.color){
      if(adrian.ropa.color.material){
        // adrian.ropa.color.material;
      }
    }
  }
*/

Object.keys(adrian); //['nombre', 'apellido', ....]
Object.values(adrian); //['Adrian', 'Eguez'........]

// Variables por valor
// Variables por referencia

// VARIABLES POR VALOR
// (primitivos)
// number
// string
// boolean
// undefined
let a = 1;
const b = 'a';
const c = true;
// Cuando igualamos variables a otras 
// que tienen un valor PRIMITIVO se hace referencia por VALOR
let d = a; // Valor 1
const e = b; // Valor 'a'
const f = c; // Valor true

a = a + 5;  // 6
d = d + 10; // 11

// Variables por referencia
// JSON ARREGLOS

const edadObjeto = {
  edad: 15, // 5 // 5
};
const otraEdad = edadObjeto; // Referencia (edadObjeto)

edadObjeto.edad = edadObjeto.edad + 5; // 20

otraEdad.edad = otraEdad.edad + 5; // 25
edadObjeto.edad; // 25
otraEdad.edad; // 25
const otraEdadClonada = Object.assign({},edadObjeto);
const otraEdadClonadaDos = {...edadObjeto};

// Destructuracion

// OBJETOS

const letras = {
  a:'a',
  b:'b',
};
const letrasDos = {
  b: 'abecedario',
  c: 'c',
  d: 'd',
};

const letrasCompleto = {
  ...letras,
  ...letrasDos,
  // b: 'abecedario',
}

// ARREGLOS

const arregloABCUno = ['a','b','c'];
const arregloABCDos = ['d','e','f','a','a','a','a'];

const arregloCompletoABC = [...arregloABCUno, ...arregloABCDos ];
// ['a','b','c','d','e','f','a','a','a','a']

// ARREGLOS

const arreglo: number[] = [6, 7, 8, 9, 10];
const arregloDos: Array<number> = [6, 7, 8, 9, 10];
const arregloTodo: Array<any> = [
  true, 1, 1.2, 'Adrian', undefined, null, {}, [1, 2, true, 'A']
];

// for of 

for (let numero of arreglo) { // VALORES
  console.log('numero', numero);
}


// for in

for (let indice in arreglo) { // INDICES
  arreglo[indice];
  console.log('indice', indice);
}


// const arreglo =  [6, 7, 8, 9, 10];

arreglo.push(11); // Anadir al final un elemento
// [6, 7, 8, 9, 10, 11];

arreglo.pop(); // Eliminar al final un elemento
// [6, 7, 8, 9, 10];

arreglo.unshift(5); //  Anadir al principio del arreglo
// [5, 6, 7, 8, 9, 10];

arreglo.splice(
  0, // indice -> 0
  1  // # elementos a eliminarse -> 1
); 
// [6, 7, 8, 9, 10];

arreglo.splice(
  0, // indice
  0, // # elementos a borrar
  3, 4, 5); // elementos a agregar

// [3, 4, 5, 6, 7, 8, 9, 10];

const arregloDatos = [
  {
      id: 1,
      nombre: 'Adrian',
      nota: 5
  },
  {
      id: 2,
      nombre: 'Vicente',
      nota: 8
  },
  {
      id: 3,
      nombre: 'Carolina',
      nota: 14
  },
  {
      id: 4,
      nombre: 'Wendy',
      nota: 16
  },
  {
      id: 5,
      nombre: 'Andrea',
      nota: 19
  },
  {
      id: 6,
      nombre: 'Pamela',
      nota: 19
  },
  {
      id: 7,
      nombre: 'Cristian',
      nota: 20
  },
  {
      id: 8,
      nombre: 'Daniel',
      nota: 19
  },
  {
      id: 9,
      nombre: 'Lilly',
      nota: 14
  },
  {
      id: 10,
      nombre: 'Ramiro',
      nota: 12
  }
];






























