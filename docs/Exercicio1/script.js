function verificarParOuImpar(){
    const input = document.getElementById('numero').value;
    const numero = parseInt(input, 10);
    const resultado = document.getElementById('resultado');

    if(isNaN(numero)){
        resultado.innerText = 'Por favor, digite um número.';
        return;
    }
    if(numero % 2 === 0){
        resultado.innerText = `${numero} é um número PAR.`
    } else {
        resultado.innerText = `${numero} é um número ÍMPAR.`
    }
}