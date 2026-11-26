const formulario = document.getElementById('form-revisao');
const assunto = document.getElementById('assunto');
const dataEstudo = document.getElementById('data-estudo');
const resumo = document.getElementById('resumo-plano');
const saidas = document.querySelectorAll('.data-revisao');
const formatoData = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
});

function dataLocalDeHoje() {
  const hoje = new Date();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const dia = String(hoje.getDate()).padStart(2, '0');
  return `${hoje.getFullYear()}-${mes}-${dia}`;
}

function somarDias(data, quantidade) {
  // O campo date fornece uma data civil em UTC. A soma atravessa meses e anos.
  const resultado = new Date(data.getTime());
  resultado.setUTCDate(resultado.getUTCDate() + quantidade);
  return resultado;
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const tema = assunto.value.trim();
  if (!tema) {
    assunto.setCustomValidity('Digite o assunto que você estudou.');
    assunto.reportValidity();
    return;
  }
  const dataInicial = dataEstudo.valueAsDate;
  if (!dataInicial) return;
  for (const saida of saidas) {
    const data = somarDias(dataInicial, Number(saida.dataset.dias));
    const tempo = document.createElement('time');
    tempo.dateTime = data.toISOString().split('T')[0];
    tempo.textContent = formatoData.format(data);
    saida.replaceChildren(tempo);
  }
  resumo.textContent = `Calendário de revisão para “${tema}”.`;
});

assunto.addEventListener('input', () => assunto.setCustomValidity(''));
dataEstudo.value = dataLocalDeHoje();
formulario.hidden = false;
