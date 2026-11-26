const listaCuriosidades = document.querySelector('.curio-abas');
const abasCuriosidades = Array.from(listaCuriosidades.querySelectorAll('[role="tab"]'));
const historias = abasCuriosidades.map((aba) => document.getElementById(aba.getAttribute('aria-controls')));

function selecionarCuriosidade(indice) {
  abasCuriosidades.forEach((aba, posicao) => {
    const selecionada = posicao === indice;
    aba.setAttribute('aria-selected', String(selecionada));
    aba.tabIndex = selecionada ? 0 : -1;
    historias[posicao].hidden = !selecionada;
  });
}

abasCuriosidades.forEach((aba, indice) => {
  const historia = historias[indice];
  historia.setAttribute('role', 'tabpanel');
  historia.setAttribute('aria-labelledby', aba.id);
  historia.tabIndex = 0;
  aba.addEventListener('click', () => selecionarCuriosidade(indice));

  aba.addEventListener('keydown', (evento) => {
    const total = abasCuriosidades.length;
    let destino;
    switch (evento.key) {
      case 'ArrowLeft': destino = (indice - 1 + total) % total; break;
      case 'ArrowRight': destino = (indice + 1) % total; break;
      case 'Home': destino = 0; break;
      case 'End': destino = total - 1; break;
      default: return;
    }
    evento.preventDefault();
    selecionarCuriosidade(destino);
    abasCuriosidades[destino].focus();
  });
});

selecionarCuriosidade(0);
listaCuriosidades.hidden = false;
