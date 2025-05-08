function adicionarItem() {
  const input = document.getElementById('item');
  const texto = input.value.trim();
  const lista = document.getElementById('lista');
  if (texto === '') {
    alert('Digite um item válido!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = texto;

  const botao = document.createElement('button');
  botao.textContent = 'Remover';
  botao.style.marginLeft = '10px';
  botao.onclick = function () {
    lista.removeChild(li);
  };
  li.appendChild(botao);
  lista.appendChild(li);

  input.value = '';
  input.focus();
}
