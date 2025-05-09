const votos = {
  frio: 0,
  calor: 0,
  nenhum: 0
};

function votar() {
  const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked');
  const resultado = document.getElementById('resultado');

  if (!opcaoSelecionada) {
    resultado.innerText = 'Por favor, selecione uma opção.';
    return;
  }

  const valor = opcaoSelecionada.value;
  votos[valor]++;
  const total = votos.frio + votos.calor + votos.nenhum;
  resultado.innerHTML = `
    <p>Total de votos: ${total}</p>
    <ul>
      <li>Frio: ${votos.frio} votos (${((votos.frio / total) * 100).toFixed(1)}%)</li>
      <li>Calor: ${votos.calor} votos (${((votos.calor / total) * 100).toFixed(1)}%)</li>
      <li>Nenhum: ${votos.nenhum} votos (${((votos.nenhum / total) * 100).toFixed(1)}%)</li>
    </ul>
  `;
}
