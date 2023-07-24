const par = require("./funcionpar");
const multiplica = require("./multiplicacion");

function array(num){
    let arrayNuevo = [];
    for (let i = 0; i < num.length; i++) {
        if (par(num[i])) {
            arrayNuevo.push(multiplica(num[i]))
        }
    }
    return arrayNuevo
}

console.log(array([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))
