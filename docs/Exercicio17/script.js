function verificarPrimo() {
  const input = document.getElementById('numero');
  const resultado = document.getElementById('resultado');
  const numero = parseInt(input.value, 10);

  if (isNaN(numero) || numero < 2) {
    resultado.innerText = 'Digite um número inteiro maior ou igual a 2.';
    return;
  }

  let primo = true;

 
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      primo = false;
      break;
    }
  }

  resultado.innerText = primo
    ? `${numero} é um número primo.`
    : `${numero} não é primo.`;
}
