const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const input = document.getElementById('palpite');
  const dica = document.getElementById('dica');
  const palpite = parseInt(input.value, 10);
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    dica.innerText = 'Digite um número entre 1 e 100.';
    dica.style.color = 'red';
    return;
  }

  tentativas++;

  if (palpite === numeroSecreto) {
    dica.innerText = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`;
    dica.style.color = 'green';
  } else if (palpite < numeroSecreto) {
    dica.innerText = 'Tente um número maior.';
    dica.style.color = '#007bff';
  } else {
    dica.innerText = 'Tente um número menor.';
    dica.style.color = '#007bff';
  }

  input.value = '';
  input.focus();
}

