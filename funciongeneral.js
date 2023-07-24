const funcionDeNumeroPar = require("./funcionpar.js");
const multiplicacion = require("./multiplicacion.js");

// const funcionDeAzul = function(number){
//   return number * 2; 
// } // borrar esto dsp

// function parDuplicado(array) {
//     let arrayNuevo = [];
//     for (let i = 0; i < array.length; i++) {
//         if (funcionDeNumeroPar([i])) {
//             arrayNuevo.push(funcionDeAzul([i]))
//         }
//     }
//     return arrayNuevo;    
    
// } 


function parDuplicado(array) {
    let arrayNuevo = [];
    for (let i = 0; i < array.length; i++) {
      if (funcionDeNumeroPar(array[i])) {
        arrayNuevo.push(multiplicacion(array[i]));
      }
    }
    return arrayNuevo;
  };

// console.log(funcionDeAzul(2));

console.log(parDuplicado([1, 2, 4, 5, 6, 8])); 
