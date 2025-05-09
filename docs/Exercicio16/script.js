function contar() {
  const texto = document.getElementById('texto').value.trim();
  const resultado = document.getElementById('resultado');
  if (texto === '') {
    resultado.innerText = 'Digite algo para contar.';
    return;
  }
  const palavras = texto.split(/\s+/).filter(p => p.length > 0);
  const totalPalavras = palavras.length;
  const letras = texto.replace(/\s+/g, '');
  const totalLetras = letras.length;

  resultado.innerHTML = `
    Palavras: ${totalPalavras}<br>
    Letras (sem espaços): ${totalLetras}
  `;
}
