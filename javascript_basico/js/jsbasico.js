/* 
Ejercicio para PalmaActiva
--------------------------------
Mi primer js básico
*/

//Variable expresiva

var funcionExpresiva = function(){
    return 'Variable expresiva';
}
funcionExpresiva();

// Voy a declarar varias variables 

var valor1 = 6;
var valor2 = 12;
var valor3 = 58;
var valor4 = 93;
var nombre = 'Virginia';
var apellido = 'Torres';

/*
Ahora voy a crear funciones con parámetros
----------
Voy a sumar, restar y multiplicar
*/

//Vamos a sumar

function suma(valor3, valor4) {
    return valor3 + valor4;
}

function sumo(valor1, valor2) {
    var sisumo = valor1 + valor2;
    return sisumo;
}

//Resultado por consola

function sumar(valor2, valor3){
    var resultadosumar = valor2 + valor3;
    console.log(resultadosumar);
}

sumar(valor2, valor3);

//Vamos a restar y ver el resultado en consola

function restar(valor4, valor2){
    var resultadoresta = valor4 - valor2;
    console.log(resultadoresta);
}

restar(valor4, valor2);

//Probando a multiplicar

function multiplica(valor4, valor2){
    console.log(valor4 * valor2)
}
multiplica(valor4, valor2);

//Vamos a meter un string y que se vea por consola

console.log(nombre + " " + apellido);

console.log(`Mis datos son: ${nombre + " " + apellido}`);

    var ficha = nombre + " " + apellido;
    console.log(ficha);

//Voy a utilizar un caracter especial, por ejemplo comillas

    var datos = "Mi nombre es \"Virginia Torres\" y vivo en Palma";
    console.log(datos);


