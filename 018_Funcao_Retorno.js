function comissaoCliente(valor, percComissao){
    let comissao = valor * (percComissao / 100);
    return comissao;
}

valor = 1000;
percComissao = 10;
console.log(`Sua comissão será no valor de ${comissaoCliente (valor, percComissao)} reais`);
