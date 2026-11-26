const cenarios = {
  dns: {
    terminal: [
      '$ ping 192.168.1.1', 'Resposta de 192.168.1.1.', '',
      '$ ping 203.0.113.80', 'Resposta de 203.0.113.80.', '',
      '$ nslookup portal.exemplo.test', 'Tempo limite da consulta excedido.'
    ],
    titulo: 'Falha na resolução DNS',
    leitura: 'O gateway e o servidor externo respondem por IP. A consulta pelo nome expira. Neste cenário, a falha aparece na resolução do nome.',
    passo: 'Conferir qual servidor DNS o computador recebeu e repetir a consulta usando esse servidor.'
  },
  dhcp: {
    terminal: [
      '$ ipconfig', 'Endereço IPv4: 169.254.23.14', 'Máscara: 255.255.0.0',
      'Gateway padrão: sem endereço', '', '$ ping 192.168.1.1', 'Destino inacessível.'
    ],
    titulo: 'O computador ficou sem a configuração DHCP',
    leitura: 'A rede do exercício usa 192.168.1.0/24. O computador atribuiu a si mesmo um endereço 169.254 e está sem gateway. Esses indícios apontam para uma concessão DHCP que não chegou.',
    passo: 'Conferir a conexão com a rede local e verificar se outro computador consegue receber um endereço do mesmo servidor DHCP.'
  },
  gateway: {
    terminal: [
      '$ ipconfig', 'Endereço IPv4: 192.168.1.20', 'Máscara: 255.255.255.0',
      'Gateway padrão: 192.168.1.1', '', '$ ping 192.168.1.1', 'Resposta de 192.168.1.1.',
      '', '$ ping 203.0.113.80', 'Tempo limite da solicitação.'
    ],
    titulo: 'O gateway responde na rede local',
    leitura: 'O computador tem IP e alcança o roteador. O teste externo expira. Essa combinação deixa em aberto tanto uma falha na saída para a internet quanto um filtro de ICMP no caminho.',
    passo: 'Testar um segundo destino e conferir a conexão externa do roteador antes de atribuir a falha à operadora.'
  },
  ok: {
    terminal: [
      '$ ipconfig', 'Endereço IPv4: 192.168.1.20', 'Gateway padrão: 192.168.1.1',
      '', '$ ping 192.168.1.1', 'Resposta de 192.168.1.1.',
      '', '$ nslookup portal.exemplo.test', 'Nome: portal.exemplo.test',
      'Endereço: 203.0.113.80', '', '$ ping 203.0.113.80', 'Resposta de 203.0.113.80.'
    ],
    titulo: 'Os três testes responderam',
    leitura: 'O computador recebeu um IP da rede, alcançou o gateway e consultou o DNS. O endereço retornado para o portal também respondeu.',
    passo: 'Abrir o serviço que a pessoa usa e confirmar se a aplicação funciona de ponta a ponta.'
  }
};

const formulario = document.getElementById('lab-form');
const seletor = document.getElementById('cenario');
const terminal = document.getElementById('saida');
const diagnostico = document.getElementById('diagnostico');
const leitura = document.getElementById('leitura');
const proximoTeste = document.getElementById('passo');

function apresentarCenario() {
  const cenario = cenarios[seletor.value];
  terminal.textContent = cenario.terminal.join('\n');
  diagnostico.textContent = cenario.titulo;
  leitura.textContent = cenario.leitura;
  proximoTeste.textContent = cenario.passo;
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  apresentarCenario();
});

apresentarCenario();
