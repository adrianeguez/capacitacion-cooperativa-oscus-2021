import { enableProdMode, KeyValueDiffers } from '@angular/core';
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
let nombre = 'Adrian'; // NUNCA USAR VAR
let nombreLet ='Adrian';
nombre = 'Vicente';
nombreLet = 'Vicente';
// Inmutables
const nombreConst = 'Adrian';
// nombreConst = 'Vicente'; X

// Tipos de variables (primitivas)
// Duck Typing

const numero = 1; // number
// let numero: number = 1; // number
// numero = 'Adrian'; No podemos asignar un string a un numero
const sueldo = 1.2;
const texto = 'Adrian';
// const texto: string = "Adrian";
const casado = false;
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

for (const numero of arreglo) { // VALORES
  console.log('numero', numero);
}


// for in

for (const indice in arreglo) { // INDICES
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

// for (let i; i>arreglo.length; i--){
//     console.log('valorActual', arreglo[i]);
// }

// FOREACH
// ITERAR 
// Devuelve undefined

const respuestaForEach = arregloDatos
        .forEach(
          function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            // return NO HAY RETURN
          }
        );

console.log('respuestaForEach', respuestaForEach);  // undefined

// FIND (ENCUENTRA EL PRIMERO)
// devolver dentro de la funcion una expresion -> TRUTY FALSY
// respuesta ELEMENTO ENCONTRADO (No existe es undefined)

const respuestaFind = arregloDatos
    .find(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            return valorActual.nombre === 'Cristian';
        }
    );
console.log('respuestaFind', respuestaFind);  // No encuentra -> undefined

// FINDINDEX
// devolver dentro de la funcion una expresion -> TRUTY FALSY
// respuesta INDICE ELEMENTO ENCONTRADO (No existe es undefined)

const respuestaIndex = arregloDatos
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Cristian";
        }
    );

console.log('respuestaIndex', respuestaIndex);  // undefined

// MAP (cuando queramos modificar el arreglo)
// Devolvemos nuevo elemento
// respuesta NUEVO ARREGLO (Con los valores devueltos)

const respuestaMap = arregloDatos
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota + 1,
            };
            return nuevoElemento;
            // return 15; // [15,15,15,15,15,15,15]
        }
    );
console.log('respuestaMap', respuestaMap);
console.log('arregloDatos', arregloDatos);

// FILTER
// Devolvemos EXPRESION (Truty Falsy)
// respuesta NUEVO ARREGLO ELEMENTOS FILTRADOS

const respuestaFilter = arregloDatos
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            // return valorActual.nota < 9;
            return valorActual.nota >= 14;
        }
    );

console.log('respuestaFilter', respuestaFilter);
console.log('arregloDatos', arregloDatos);

// AND OR
// true AND true AND true -> true
// true AND true AND false -> false
// true OR true OR true -> true
// true OR true OR false -> true
// false OR false OR false -> true

// (OR) -> SOME
// DEVOLVER EXPRESION (Truty Falsy)
// Hay ALGUNA nota menor a nueve? SI X NO
// Recibimos un boolean TRUE o FALSE

const respuestaSome = arregloDatos
    .some(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome', respuestaSome);

// EVERY -> expresion
// DEVUELVE BOOLEANO
// TODAS las notas son mayores a 14? SI NO
// AND

const respuestaEvery = arregloDatos
    .every(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery', respuestaEvery); // true / false

// REDUCE
// VALOR
// [1,2,3,5,6,5,4,3,1]
// reduce       izq -> der
// reduceRight  der -> izq

// 1) Funcion calcular lo acumulado
// 2) Valor inicial Acumulador (0)

const respuestaReduce = arregloDatos
      .reduce(
        function (valorAcumulado, valorActual, indice, arreglo){
          return valorAcumulado + valorActual.nota;
        },
        0 // Valor inicial del acumulador
      );
const promedio = respuestaReduce / arregloDatos.length;
console.log('Promedio', promedio);

arregloDatos
    .map(v => v.nota * 1.3) // anadiendo el 30 %
    .filter((nota) => nota < 9) // Busco a los < 9
    .reduce((acumulado, actual) => acumulado + actual, 0)

// FUNCIONES
// DUCK TYPING


function sinParametros(): void { // undefined
  console.log('Hola mundo');
}

function soloNumeros(a: number, b: number, c: number): number {
  return a - b + c; // valor a devolver
}

// soloNumeros('v', true,[1,2,3]);
soloNumeros(1, 2, 3); // 3

// Funciones nombradas
function funcionNombrada(){

}
funcionNombrada();

// Funciones ANONIMAS (no tienen nombre)

const funcionSinNombre = function(){};
const funcionOpcionalPongoNombre = function nombre(){};

funcionSinNombre();
funcionOpcionalPongoNombre();

// FAT ARROW FUNCTIONS => ->

const funcionFlechaUno = () => { }
// const funcionFlechaDos = (a: number) => { return a + 1; }
// const funcionFlechaTres = (a: number) => a + 1
// const funcionFlechaCuatro = a => a + 1
// const funcionFlechaCinco = (a: number, b: number) => a + b;
// funcionFlechaDos(1);
// funcionFlechaTres(3);
// funcionFlechaCuatro(4);
// funcionFlechaCinco(1, 2);

function sumarNumeros(numeroInicial: number, // 1
                      ...otrosNumeros: number[]) { // Parametros Inf [2,3,4,5,...]
  let total = 0;
  otrosNumeros.forEach(
    (valorActual) => {
        total = total + valorActual;
    }
  );
  return numeroInicial + total;
}
sumarNumeros(1);
sumarNumeros(1,2);
sumarNumeros(1,2,3,4,5,6,7,8,9,10,11);

// CALLBACKS (Funcion asincrona -> )

console.log('PRIMERO');

/*

// CALBACK HELL

setTimeout( 
      ()=>{ // Lista BDD1
        console.log('CONSULTA BDD 1');

        setTimeout( 
          ()=>{ // Lista HTTP2
            console.log('CONSULTA HTTP 2');
    
            setTimeout( 
              ()=>{ // Lista HTTP2
                console.log('CONSULTA HTTP 3');
        
                setTimeout( 
                  ()=>{ // Lista HTTP2
                    console.log('CONSULTA HTTP 3');
                    setTimeout( 
                      ()=>{ // Lista HTTP2
                        console.log('CONSULTA HTTP 3');
                        setTimeout( 
                          ()=>{ // Lista HTTP2
                            console.log('CONSULTA HTTP 3');
                            setTimeout( 
                              ()=>{ // Lista HTTP2
                                console.log('CONSULTA HTTP 3');
                                setTimeout( 
                                  ()=>{ // Lista HTTP2
                                    console.log('CONSULTA HTTP 3');
                                    setTimeout( 
                                      ()=>{ // Lista HTTP2
                                        console.log('CONSULTA HTTP 3');
                                        setTimeout( 
                                          ()=>{ // Lista HTTP2
                                            console.log('CONSULTA HTTP 3');
                                    
                                            setTimeout( 
                                              ()=>{ // Lista HTTP2
                                                console.log('CONSULTA HTTP 3');
                                                setTimeout( 
                                                  ()=>{ // Lista HTTP2
                                                    console.log('CONSULTA HTTP 3');
                                            
                                                    
                                                    },
                                                  1
                                                );
                                                
                                                },
                                              1
                                            );
                                            },
                                          1
                                        );
                                        
                                        },
                                      1
                                    );
                                    
                                    },
                                  1
                                );
                                
                                },
                              1
                            );
                            
                            },
                          1
                        );
                        
                        },
                      1
                    );
                    
                    },
                  1
                );
                },
              1
            );

          },
        1
      );

      },
    1
);
*/
console.log('SEGUNDO');


// PROMESAS


const sumarNumeroPromesa = new Promise(
  (resolve, reject)=>{
    resolve(14); // return
  }
);
const sumarNumeroError = new Promise(
  (resolve, reject)=>{
    reject('Error en suma');  // return
  }
);

console.log('Primero');

sumarNumeroPromesa
  .then( // try 1
    (datos)=>{
      console.log('Todo bien', datos);// Siempre va a caer
      console.log('Tercero');
      return sumarNumeroPromesa
    }
  )
  .then( // try 2
    (datos)=>{
      console.log('Todo bien', datos);// Siempre va a caer
      console.log('Cuarta');
      return sumarNumeroPromesa
    }
  )
  .then( // try 3
    (datos)=>{
      console.log('Todo bien', datos);// Siempre va a caer
      console.log('Quinta');
    }
  )
  .catch( // catch (para todos)
    (error)=>{
      console.log('Error', error);
      console.log('Tercero');
    }
  )

console.log('Segundo');

// ASYNC AWAIT (solo se puede usar en funciones o metodos de clases)

const flecha = async ()=> 1;
const anonima = async function (){};

async function ejecutarPromesas(){
  try{
    const respuestaPromesaUno = await sumarNumeroPromesa;
    respuestaPromesaUno; // 15
    const respuestaPromesaDos = await sumarNumeroPromesa;
    respuestaPromesaDos; // 25
    const respuestaPromesaTres = await sumarNumeroPromesa;
    respuestaPromesaTres; // 25
  }catch(error){
    console.error({mensaje:'Error', error:error});
  }
}

// MULTIPLES TIPOS

let numerosBoleanosStrings: number | string | boolean = 1;

numerosBoleanosStrings = '1';
numerosBoleanosStrings = true;
numerosBoleanosStrings = 15;

const operacion = (numerosBoleanosStrings as number) + 10; // CASTEO
const otro = (numerosBoleanosStrings as any) as string;
const otroDos = (numerosBoleanosStrings as any) as boolean;

// Para tipar OBJETOS

enum EstadoUsuario{ // -> TRANSPILA A JS -> NO OCUPA ESPACIO
  Acuerdo = 'AC',
  Inacuerdo = 'IN',
  Bien = 'BN'
}
EstadoUsuario.Acuerdo; // 'AC'

// Interfaces en JS se usan para tipar los datos.
// TRABAJAR DE MANERA DEFENSIVA

interface Usuario { // -> TRANSPILA A JS -> NO OCUPA ESPACIO
  nombre?: string;
  apellido?:string;
  edad?: number; // ? -> OPCIONAL es decir o es un number | undefined
  estado?: EstadoUsuario;
  // funciones
  imprimirUsuario?: (mensaje: string) => string | boolean;
  calcularImpuesto?: (impuesto: number) => number;
  estadoActual?: () => EstadoUsuario;
}

const adrianJson: Usuario = {
  nombre: 'Adrian',
  apellido: 'Eguez',
  estado: EstadoUsuario.Bien,
  edad: 32
}

if(adrianJson.edad){
  adrianJson.edad; // 32 -> calculos
}

// Clases

class Persona {
  public nombre: string;
  // public apellido: string;
  apellido?: string; // Public es el modificador de acceso por defecto
  private cedula = '111111';
  static nombreReferencial = 'Humano';
  protected nombreYApellido = '';

  constructor(
    nombreParametro: string,
    apellidoParametro?: string,
  ) {
      this.nombre = nombreParametro;
      this.apellido = apellidoParametro;
      this.nombreYApellido = this.nombre + ' ' + this.apellido;
  }

  private mostrarNombreApellido(): string {
    return this.nombreYApellido;
  }
  
}

class UsuarioPrincipal extends Persona {
  // public cedula: string; X
  constructor(
    nombreParametro: string, // PARAMETROS
    apellidoParametro: string, // PARAMETROS
    public cedulaPublica: string,
    public estadoCivil: string,
    // cedulaParametro: string, // PARAMETROS X
  ){
    super(nombreParametro, apellidoParametro);
    this.cedulaPublica;
    this.estadoCivil;
    // this.cedula = cedulaParametro; X
  }

}

const adrianUP = new UsuarioPrincipal(
  'Adriam',
  'Eguez',
  '1718137159',
  'soltero'
);
console.log(adrianUP.cedulaPublica);
console.log(adrianUP.estadoCivil);


/*

ARCHIVOS Y CARPETAS

ng new PROYECTO -> Crea un nuevo proyecto
npm i -> instalar dependencias 
npm run start -> Levantar el proyecto
npm run COMANDO
ng serve -> Levantar el proyecto

INSTALACION DEL LINT

npm install --save-dev eslint
npm i --save-dev @typescript-eslint/eslint-plugin 
npm i --save-dev @typescript-eslint/parser

USO DEL LINT

LINT -> Reglas de escritura de codigo
npm run lint -> Corre reglas del lint en nuestro codigo

COMPILAR EL ANGULAR

ng build
ng build --prod
npm run build -> compilar para produccion
npm run build -- --prod -> compilar para produccion


/node_modules -> dependencias
/src -> fuentes
  /app -> archivos de desarrollo
     modulo principal
     componente principal
     modulo rutas
  /assets -> archivos estaticos (pdf, img, css, js, .mp3)
  /environments -> desarrollo, produccion
  index.html
  main.ts -> configuraciones
  polyfills.ts -> funciones que no estan tipadas, les damos un tipo
  styles.scss -> estilos globales
  test.ts -> pruebas
  
angular.json -> configuraciones del angular
karma.conf.js -> test
package.json -> archivo principal proyecto
tsconfig... -> configuracion para el typescript

GENERAR COMPONENTES

ng generate component ruta-login
ng g c ruta-login

ng generate component ruta-no-encontrado
ng g c ruta-no-encontrado

HSID=AhkTwPKfjXg6PcKQ_; SSID=AxTWVx68Op6RzEqm6; APISID=lm5HsV109fB5Lt-q/AM473cwOOeB7vhFJY; SAPISID=xENGNIsOSXnyzbQr/AFLHt4tQ7G-I0XHgj; __Secure-1PAPISID=xENGNIsOSXnyzbQr/AFLHt4tQ7G-I0XHgj; __Secure-3PAPISID=xENGNIsOSXnyzbQr/AFLHt4tQ7G-I0XHgj; SEARCH_SAMESITE=CgQIl5MB; SID=AQgwDt0gheK50A7vSisHE02sSCD7kQ3r5OaQ5Oz3wUQ5zD70Hz-dXf_kXvURNFweQU57GA.; __Secure-3PSID=AQgwDt0gheK50A7vSisHE02sSCD7kQ3r5OaQ5Oz3wUQ5zD70jY2kOCEBZDectehYa0nNQA.; __Secure-1PSID=AQgwDt0gheK50A7vSisHE02sSCD7kQ3r5OaQ5Oz3wUQ5zD70r-hfVlvZgK-ojteXeU_05A.; OTZ=6099555_76_76__76_; __Secure-1PSIDCC=AJi4QfESNrPmhno5roH_yw2R38hcVPateo8lVk9rekMYA2O6obrdoFyz-2Y0O001IryfBVx9IA; NID=221=aNkv4na59MtkrHS8J8-G-oSwnu31aKTRp9kkPXMGEqBmNCojKD77fRD8MHYjebqf2yWWwUARSqkq42E8oeVQb4-MzRTpKE_vqMWeFJ6gxaYT-VOHwg3N95SO2lT3OZ0RAsdTdJvjP1JsulEblsZfXJvT8JirC-hMJKtZXdYCcdDzV5Kk8_8vXKjZcBecKE0sQfptW_8lY9u-TVRhFXlQO0jHeUNYGcFDpywIy8P2uQjuRiqfSyLhtM9g24UYol9eUbmCePfRdBPfBsepxmpWwVGmwDDDqj9Pzd9Wr5UNBIQD4BJN5ENOKNgtSkc3mA; 1P_JAR=2021-08-17-15; DV=c5zyPhM1NNFOYJFn5I5yK2WU0L1LtdemuykTZRAw2wEAADBlwiJAdn-okAAAAETt-h2qKyYNKgAAAA; SIDCC=AJi4QfGuebwes14WeimYO5u_p2ptur9jEYcgl5E6ww1EyNI802c0fyu1pwCIQKDB95ZbTf9W5ehV; __Secure-3PSIDCC=AJi4QfEBR4Idnpf7aqs9lggntmx8VerBwrwBs4kyTO4m0NP0rgcQpgs3xuwGSATEvmC9qdp1sOMu












*/ 













