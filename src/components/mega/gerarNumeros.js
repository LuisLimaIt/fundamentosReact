function gerarNumeros(qtde) {
    const jogoPronto = [];

    for(let i = 0; i < qtde; i++){
        const numAleatorio = parseInt(Math.random() * (60 - 1) + 1);
        jogoPronto.push(numAleatorio)
        console.log(jogoPronto) 
    }
    
    return jogoPronto;
}

console.log(gerarNumeros(7));