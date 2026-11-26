// Cada produto guarda o ID de sua categoria, como em uma chave estrangeira.
const categorias = [
  { id: 1, nome: 'Componentes' },
  { id: 2, nome: 'Periféricos' },
  { id: 3, nome: 'Armazenamento' },
];
const produtos = [
  { nome: 'Memória DDR5 16 GB', categoriaId: 1, quantidade: 4 },
  { nome: 'Mouse sem fio', categoriaId: 2, quantidade: 8 },
  { nome: 'Placa de vídeo', categoriaId: 1, quantidade: 0 },
  { nome: 'SSD NVMe 1 TB', categoriaId: 3, quantidade: 0 },
  { nome: 'Teclado mecânico', categoriaId: 2, quantidade: 6 },
];
const filtros = document.getElementById('filtros-estoque');
const seletorCategoria = document.getElementById('categoria');
const disponiveis = document.getElementById('disponiveis');
const tabela = document.getElementById('linhas-estoque');
const contagem = document.getElementById('contagem');
const painelSQL = document.getElementById('sql');

for (const categoria of categorias) {
  seletorCategoria.add(new Option(categoria.nome, String(categoria.id)));
}

function montarSQL(idCategoria, apenasDisponiveis) {
  const linhas = [
    'SELECT p.nome, c.nome AS categoria, p.quantidade',
    'FROM produto AS p',
    'JOIN categoria AS c ON c.id = p.categoria_id',
  ];
  const condicoes = [];
  if (idCategoria) condicoes.push(`c.id = ${idCategoria}`);
  if (apenasDisponiveis) condicoes.push('p.quantidade > 0');
  if (condicoes.length) linhas.push('WHERE ' + condicoes.join(' AND '));
  linhas.push('ORDER BY p.nome;');
  return linhas.join('\n');
}

function atualizarEstoque() {
  const idCategoria = Number(seletorCategoria.value);
  const apenasDisponiveis = disponiveis.checked;
  const selecionados = produtos.filter((produto) => {
    const mesmaCategoria = !idCategoria || produto.categoriaId === idCategoria;
    const temEstoque = !apenasDisponiveis || produto.quantidade > 0;
    return mesmaCategoria && temEstoque;
  });
  selecionados.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  tabela.replaceChildren();

  for (const produto of selecionados) {
    const categoria = categorias.find((item) => item.id === produto.categoriaId);
    const linha = tabela.insertRow();
    linha.insertCell().textContent = produto.nome;
    linha.insertCell().textContent = categoria.nome;
    const quantidade = linha.insertCell();
    quantidade.className = 'quantidade';
    quantidade.textContent = produto.quantidade;
  }
  if (selecionados.length === 0) {
    const aviso = tabela.insertRow().insertCell();
    aviso.colSpan = 3;
    aviso.textContent = 'Nenhum produto atende a esses filtros.';
  }
  const total = selecionados.length;
  contagem.textContent = total === 1 ? '1 produto' : `${total} produtos`;
  painelSQL.textContent = montarSQL(idCategoria, apenasDisponiveis);
}

filtros.hidden = false;
filtros.addEventListener('change', atualizarEstoque);
filtros.addEventListener('submit', (evento) => evento.preventDefault());
atualizarEstoque();
