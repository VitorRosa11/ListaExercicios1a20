document.addEventListener('DOMContentLoaded', function() {
    const botaoSortear = document.getElementById('sortear');
    const numeroSorteado = document.getElementById('numero-sorteado');
    const mensagem = document.getElementById('mensagem');
    const inputMinimo = document.getElementById('minimo');
    const inputMaximo = document.getElementById('maximo');

    botaoSortear.addEventListener('click', sortearNumero);

    function sortearNumero() {
        const minimo = parseInt(inputMinimo.value);
        const maximo = parseInt(inputMaximo.value);
    
        if (isNaN(minimo) || isNaN(maximo)) {
            mensagem.textContent = "Por favor, insira valores numéricos válidos.";
            return;
        }
        
        if (minimo >= maximo) {
            mensagem.textContent = "O valor mínimo deve ser menor que o máximo.";
            return;
        }
        
        mensagem.textContent = "";
    
        numeroSorteado.classList.remove('animacao');
        void numeroSorteado.offsetWidth; 
        numeroSorteado.classList.add('animacao');
        
        
        setTimeout(() => {
            const sorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
            numeroSorteado.textContent = sorteado;
            mensagem.textContent = `Número sorteado entre ${minimo} e ${maximo}!`;
        }, 300);
    }

   
    inputMinimo.addEventListener('change', validarInputs);
    inputMaximo.addEventListener('change', validarInputs);

    function validarInputs() {
        const minimo = parseInt(inputMinimo.value);
        const maximo = parseInt(inputMaximo.value);
        
        if (!isNaN(minimo) && !isNaN(maximo) && minimo >= maximo) {
            inputMaximo.setCustomValidity("O valor máximo deve ser maior que o mínimo.");
        } else {
            inputMaximo.setCustomValidity("");
        }
    }
});
