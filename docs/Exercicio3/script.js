function calcularIMC(){
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if(isNaN(peso) || isNaN(altura) || altura <= 0){
        resultado.innerText = 'Preencha todos os campos com caracteres válidos.';
        return;
    }
    const imc = peso / (altura * altura);

    let classificacao = '';
    if(imc < 18.5){
        classificacao = 'Abaixo do peso.';
    } else if (imc < 24.9){
        classificacao = 'Peso normal.';
    } else if (imc < 29.9){
        classificacao = 'Sobrepeso.';
    } else {
        classificacao = 'Obesidade.';
    }
    
    resultado.innerText = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
}