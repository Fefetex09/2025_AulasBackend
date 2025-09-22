let variavelglobal = "variavel global";

function minhaFuncao() {
   let variavellocal = "variavel local";
   console.log(variavelglobal); //acessa a variavel global
   console.log(variavellocal); //acessa a variavel local
}

minhaFuncao();
