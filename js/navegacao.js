// No celular, o menu pode abrir e fechar por toque ou teclado.
const navegacao = document.querySelector('.navegacao');
const botaoMenu = navegacao.querySelector('.botao-menu');
const linksMenu = document.getElementById('links-menu');
const telaPequena = window.matchMedia('(max-width: 720px)');

function mostrarMenu(aberto) {
  botaoMenu.setAttribute('aria-expanded', String(aberto));
  linksMenu.classList.toggle('aberto', aberto);
}

function ajustarMenu() {
  navegacao.classList.add('ativa');
  botaoMenu.hidden = !telaPequena.matches;
  mostrarMenu(false);
}

botaoMenu.addEventListener('click', () => {
  mostrarMenu(botaoMenu.getAttribute('aria-expanded') !== 'true');
});

linksMenu.addEventListener('click', (evento) => {
  if (evento.target.closest('a')) mostrarMenu(false);
});

document.addEventListener('click', (evento) => {
  if (!navegacao.contains(evento.target)) mostrarMenu(false);
});

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && botaoMenu.getAttribute('aria-expanded') === 'true') {
    mostrarMenu(false);
    botaoMenu.focus();
  }
});

telaPequena.addEventListener('change', ajustarMenu);
ajustarMenu();
