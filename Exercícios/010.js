function areaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

console.log(areaTriangulo(10, 15)); 

//Função Anônima 
const areaTriangulo2 = function (base, altura) {
    let area = (base * altura) / 2;
    return area;
}
//Função Arrow
const areaTriangulo3 = (base, altura) => {
    let area = (base * altura) / 2;
    return area;
}