function valorPi(pi) {
    pi = 3.14159;
    console.log(`O valor de pi é ${pi}`);
    return pi;
}

//Função Anônima
const raioCirculo = function (circunferencia) {
    let valorCircunferencia = circunferencia / (2 * valorPi());
    console.log(`O valor da circunferencia é ${valorCircunferencia}`);
    return valorCircunferencia;
} 

//Função Arrow
const areaTriangulo = (base, altura) => {
    let area = (base * altura) / 2;
    return area;
}