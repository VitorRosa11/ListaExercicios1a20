function calcular(){
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    const resultado = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2)){
        resultado.innerText = 'Digite dois números válidos.';
        return;
    }
    let calculo;
    switch(operacao){
        case '+':
        calculo = n1 + n2;
        break;
        case '-':
            calculo = n1 - n2;
            break;
            case '*':
                calculo = n1 * n2;
                break;
                case '/':
                if (n2 === 0){
                    resultado.innerText = 'Erro: Divisão por zero.';
                    return;
                }
                calculo = n1 / n2;
                break;
                default:
                    resultado.innerText = 'Erro. Operação inválida';
                    return;
    }
    resultado.innerText = `Resultado: ${calculo}`;
}