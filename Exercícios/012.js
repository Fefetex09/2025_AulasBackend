const prompt = require('prompt-sync')();

function valorPi(pi) {
    pi = 3.14159;
    console.log(`O valor de pi é ${pi}`);
    return pi;
}

valorPi();     
//Somente essa v
function raioCirculo(circunferencia) {
    let valorCircunferencia = circunferencia / (2 * valorPi())
    console.log(`O valor da circunferencia é ${valorCircunferencia}`);
    return valorCircunferencia;
}

let circunferencia = Number(prompt("Qual o valor da circunferencia? "));
raioCirculo(circunferencia); 

//Função anônima
const raioCirculo2 = function (circunferencia2) {
    let valorCircunferencia = circunferencia / (2 * valorPi());
    console.log(`O valor da circunferencia é ${valorCircunferencia}`);
    return valorCircunferencia;
} 

//Função Arrow
const raioCirculo3 = (circunferencia3) => {
    let valorCircunferencia = circunferencia / (2 * valorPi());
    console.log(`O valor da circunferencia é ${valorCircunferencia}`);
    return valorCircunferencia;
}