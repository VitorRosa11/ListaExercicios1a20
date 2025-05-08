function simularCaixa() {
  const valorInput = document.getElementById('valor').value;
  const resultado = document.getElementById('resultado');
  let valor = parseInt(valorInput, 10);

  if (isNaN(valor) || valor <= 0) {
    resultado.innerText = 'Digite um valor válido para saque.';
    return;
  }

  resultado.innerHTML = '';

  const notas = [100, 50, 10, 1];
  const distribuicao = {};

  notas.forEach(nota => {
    distribuicao[nota] = Math.floor(valor / nota);
    valor %= nota;
  });

  for (const nota of notas) {
    if (distribuicao[nota] > 0) {
      const p = document.createElement('p');
      p.innerText = `Notas de R$${nota}: ${distribuicao[nota]}`;
      resultado.appendChild(p);
    }
  }
}
