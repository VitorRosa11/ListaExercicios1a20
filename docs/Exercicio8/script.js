function verificarPalindromo() {
  const input = document.getElementById('entrada').value;
  const resultado = document.getElementById('resultado');
  const textoLimpo = input
    .toLowerCase()
    .replace(/[\W_]/g, '') 
    .normalize("NFD")      
    .replace(/[\u0300-\u036f]/g, ''); 

  const textoReverso = textoLimpo.split('').reverse().join('');

  if (textoLimpo && textoLimpo === textoReverso) {
    resultado.innerText = `"${input}" é um palíndromo!`;
  } else {
    resultado.innerText = `"${input}" não é um palíndromo.`;
  }
}
