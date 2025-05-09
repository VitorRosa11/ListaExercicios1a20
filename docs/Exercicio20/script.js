
  const notas = [];

function adicionarNota() {
  const input = document.getElementById('nota');
  const valor = parseFloat(input.value);
  const lista = document.getElementById('lista-notas');
  const resultado = document.getElementById('resultado');

  if (isNaN(valor) || valor < 0 || valor > 10) {
    resultado.innerText = 'Digite uma nota válida entre 0 e 10.';
    resultado.style.color = 'red';
    return;
  }

  notas.push(valor);
  lista.innerHTML = `<strong>Notas:</strong> ${notas.join(', ')}`;
  resultado.innerText = '';
  input.value = '';
  input.focus();
}

function calcularMedia() {
  const resultado = document.getElementById('resultado');

  if (notas.length < 3) {
    resultado.innerText = 'Adicione pelo menos 3 notas.';
    resultado.style.color = 'red';
    return;
  }

  const soma = notas.reduce((acc, n) => acc + n, 0);
  const media = soma / notas.length;

  let status;
  if (media >= 7) {
    status = 'Aprovado(a)';
    resultado.style.color = 'green';
  } else if (media >= 5) {
    status = 'Recuperação';
    resultado.style.color = '#e67e22';
  } else {
    status = 'Reprovado(a)';
    resultado.style.color = 'red';
  }

  resultado.innerHTML = `Média: ${media.toFixed(2)} — <strong>${status}</strong>`;
}

