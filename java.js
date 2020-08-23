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

//Invertir el orden
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "ordenado");
