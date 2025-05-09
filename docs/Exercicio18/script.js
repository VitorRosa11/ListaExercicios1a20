function validarCadastro() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const mensagem = document.getElementById('mensagem');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nome || !email || !senha) {
    mensagem.innerText = 'Preencha todos os campos.';
    mensagem.style.color = 'red';
    return;
  }

  if (!emailRegex.test(email)) {
    mensagem.innerText = 'Digite um e-mail válido.';
    mensagem.style.color = 'red';
    return;
  }

  mensagem.innerText = 'Cadastro realizado com sucesso!';
  mensagem.style.color = 'green';
}
