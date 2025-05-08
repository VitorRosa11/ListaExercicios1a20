document.addEventListener('DOMContentLoaded', function() {
    const botaoGerar = document.getElementById('gerar');
    const botaoCopiar = document.getElementById('copiar');
    const campoSenha = document.getElementById('senha');
    const inputTamanho = document.getElementById('tamanho');
    const checkboxMaiusculas = document.getElementById('maiusculas');
    const checkboxMinusculas = document.getElementById('minusculas');
    const checkboxNumeros = document.getElementById('numeros');
    const checkboxSimbolos = document.getElementById('simbolos');
    const barraForca = document.querySelector('.barra-forca');
    const textoForca = document.getElementById('texto-forca');

    
    const caracteresMaiusculos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresMinusculos = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresNumeros = '0123456789';
    const caracteresSimbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    botaoGerar.addEventListener('click', gerarSenha);
    botaoCopiar.addEventListener('click', copiarSenha);

    function gerarSenha() {
        let caracteres = '';
        let senha = '';
        if (checkboxMaiusculas.checked) caracteres += caracteresMaiusculos;
        if (checkboxMinusculas.checked) caracteres += caracteresMinusculos;
        if (checkboxNumeros.checked) caracteres += caracteresNumeros;
        if (checkboxSimbolos.checked) caracteres += caracteresSimbolos
        if (caracteres.length === 0) {
            alert('Selecione pelo menos um tipo de caractere!');
            return;
        }
        
        const tamanho = parseInt(inputTamanho.value);
    
        for (let i = 0; i < tamanho; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            senha += caracteres[indiceAleatorio];
        }
        
        campoSenha.value = senha;
        verificarForcaSenha(senha);
    }

    function copiarSenha() {
        if (!campoSenha.value) return;
        
        campoSenha.select();
        document.execCommand('copy');
    
        const textoOriginal = botaoCopiar.textContent;
        botaoCopiar.textContent = 'Copiado!';
        setTimeout(() => {
            botaoCopiar.textContent = textoOriginal;
        }, 2000);
    }

    function verificarForcaSenha(senha) {
        let forca = 0;
        const tamanho = senha.length;
        
        if (tamanho >= 12) forca += 2;
        else if (tamanho >= 8) forca += 1;
        
        if (/[A-Z]/.test(senha)) forca += 1;
        if (/[a-z]/.test(senha)) forca += 1;
        if (/[0-9]/.test(senha)) forca += 1;
        if (/[^A-Za-z0-9]/.test(senha)) forca += 2;
        
        let porcentagemForca = (forca / 7) * 100;
        let cor, texto;
        
        if (porcentagemForca < 40) {
            cor = '#e74c3c';
            texto = 'Fraca';
        } else if (porcentagemForca < 70) {
            cor = '#f39c12';
            texto = 'Média';
        } else {
            cor = '#2ecc71';
            texto = 'Forte';
        }
        
        barraForca.style.setProperty('--cor-forca', cor);
        barraForca.style.width = porcentagemForca + '%';
        textoForca.textContent = texto;
        textoForca.style.color = cor;
    }
    gerarSenha();
});

