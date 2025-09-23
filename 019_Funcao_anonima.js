//Funcçao nomeada
function saudacao(nome) {
    console.log("Bem vindo ao Senai");
} 
saudacao("Eduardo");

//Função Anônima
const saudacao2 = function (nome) {
    console.log("Bem vindo ao Senai");
}
saudacao2("Eduardo");

function soma(v1, v2) {
    console.log(v1 + v2);

}
soma(10, 5);

const soma2 = function (v1, v2) {
    console.log(v1 + v2);
}
soma2(10, 5);