function verificarIdade (){
    const anoNascimento = parseInt(document.getElementById('nascimento').value, 10);
    const resultado = document.getElementById('resultado');

    const anoAtual = new Date().getFullYear();

    if(isNaN(anoNascimento)|| anoNascimento > anoAtual || anoNascimento < 1900){
        resultado.innerText = 'Digite um ano de nascimento válido.';
        return;
    }
    const idade = anoAtual - anoNascimento;
    let classificacao;
    if(idade < 18){
        classificacao = 'Menor de idade';
    } else if (idade < 60){
        classificacao = 'Adulto(a)';
    } else {
        classificacao = 'Idoso(a)';
        }
        resultado.innerText = `Você tem ${idade} anos e é ${classificacao}.`;
}