"use strict"
   
/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array (todos sus elementos) en el cuerpo de la página y la consola
3.Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que diga si lo encuentra y su indice 
(se valorará el uso de funciones)
*/

function mostrarArray (elementos, textoCustom = "") {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>" );
    document.write("<ul>");
    elementos.forEach(element => {
    document.write("<li>"+element+"</li>");
    });
    document.write("</ul>");
}

//pedir los numeros por pantalla
var numeros = [];

for (var i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt('Introduce un número',0));
}

// mostrar el array en la consola
console.log(numeros);

// mostrar el array en la pagina
mostrarArray(numeros);

//ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "ordenado");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "revertido");

// busqueda
var busqueda = parseInt(prompt('Introduce un número a buscar',0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("</hr><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: " + posicion + "</h1>");
}
else {
    document.write("<h1>NO ENCONTRADO</h1>");
}