const prompt = require('prompt-sync')();

let nome = prompt("Qual o seu nome? ");
console.log(`Salve, ${nome}, tranquilo??`); 

let dataNascimento = prompt("Qual a sua data de nascimento? ");
console.log(`Valeu ${nome}, vc nasceu em ${dataNascimento}`);

let Anoatual = 2025;
let idade = Anoatual - dataNascimento;
console.log(`Vc tem ${idade} anos`);