function gerarTabuada(){
    const input = document.getElementById('numero');
    const numero = parseInt(input.value, 10);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if(isNaN(numero)){
        resultado.innerText = 'Digite um número válido.';
        return;

        const lista = document.createElement('ul');

        for (let i = 1; i<= 10; i++){
            const item = document.createElement('li');
            item.innerText = `${numero} X ${i} = ${numero * i}`;
            lista.appendChild(item);
        }
        resultado.appendChild(lista);
    }
}