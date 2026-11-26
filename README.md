# Portfolio_do_pai
Portfólio de João Pedro Fonseca, estudante de Ciência da Computação no UDF. Explore as peças do meu PC, consulte o estoque de uma loja de informática e planeje suas revisões. Projeto final de Front-end desenvolvido com HTML, CSS e JavaScript, com layout responsivo para celular e computador.

[Abrir o portfólio no GitHub Pages](https://joaozinfcc-gif.github.io/Portfolio_do_pai/)

## Abrir no computador

No repositório, abra **Code → Download ZIP**, extraia o arquivo e dê dois cliques em `index.html`. HTML, estilos, scripts, imagens e fontes acompanham o projeto. Também dá para abrir a pasta no VS Code e editar os arquivos.

## O que mostrar na apresentação

| Página | Experimente | Onde está o JavaScript |
| --- | --- | --- |
| Por dentro do meu PC | Selecione GPU para ver a RTX 5060 Ti e a função da memória de vídeo. | `js/setup.js` ouve a mudança do botão de opção e exibe a ficha selecionada. |
| Consulta de estoque | Escolha Armazenamento e marque “Somente produtos disponíveis”. O resultado fica vazio porque o SSD tem quantidade zero. Desmarque a opção para fazê-lo reaparecer. | `js/estoque.js` relaciona produtos e categorias pelo ID, filtra o conjunto e atualiza a tabela e a consulta SQL equivalente. Os dados são fictícios. |
| Agenda de revisão | Informe um assunto e a data de estudo. Por exemplo, 25/11/2026 gera 26/11, 02/12 e 25/12. | `js/revisao.js` lê o formulário, soma 1, 7 e 30 dias à data inicial e escreve os resultados na página. |

No celular, abra o menu e entre em **Projetos**. A grade passa de três colunas para uma. Os estilos responsáveis estão em `css/estilos.css` e `css/projetos.css`.

## Estrutura dos arquivos

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Página inicial e entrada do GitHub Pages |
| `html/` | Páginas de hardware, banco de dados e revisão |
| `css/` | Estilos, tipografia e regras de responsividade |
| `js/` | Navegação mobile e interações de cada projeto |
| `imagens/` | Imagens ilustrativas e ícone do portfólio |
| `fontes/` | Fontes locais DM Sans e Instrument Serif com as respectivas licenças |
