function acender(cor) {
  const cores = ['vermelho', 'amarelo', 'verde'];

  cores.forEach(c => {
    const elemento = document.getElementById(c);
    elemento.classList.remove('ativa');
  });

  const atual = document.getElementById(cor);
  atual.classList.add('ativa');
}
