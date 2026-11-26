const seletorPeca = document.getElementById('seletor-peca');
const paineis = document.querySelectorAll('.painel-peca');

function mostrarPeca() {
  const selecionada = seletorPeca.querySelector('input:checked').value;
  for (const painel of paineis) {
    painel.hidden = painel.id !== selecionada;
  }
}

seletorPeca.hidden = false;
seletorPeca.addEventListener('change', mostrarPeca);
mostrarPeca();
