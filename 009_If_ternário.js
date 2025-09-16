




const aprovado = true;
let mesagem = ''; 
//Modo no if tradicional
if (aprovado == true) {
    mesagem = 'Parabens, você foi aprovado';
} else {
    mesagem = 'Voce foi reprovado';
} 

//modo ternário
mesagem = (aprovado == true) ? 'Parabens, voce foi aprovado' : 'Voce foi reprovado';
