function contar(){
    const inicio = parseInt(document.getElementById('inicio').value, 10);
    const fim = parseInt(document.getElementById('fim').value, 10);
    const passo = parseInt(document.getElementById('passo').value, 10);
    const resultado = document.getElementById('resultado');

    if(isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0){
        resultado.innerText = 'Preencha os campos com valores válidos (e passo > 0).';
        return;
    }
    let contagem = '';
    if(inicio < fim){
        for(let i = inicio; i <= fim; i += passo){
            contagem += `${i}`;
        }
    } else {
        for (let i = inicio; i >= fim; i -= passo){
            contagem += `${i}`;
        }
    }
    resultado.innerText = contagem.trim();
}