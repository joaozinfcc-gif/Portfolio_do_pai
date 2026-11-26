# Academia BoaForma

Projeto acadêmico de Modelagem de Banco de Dados, implementado em MySQL em 2026. O banco relaciona alunos, planos, pagamentos, turmas, instrutores, exercícios e frequência. A página do portfólio apresenta três consultas com os resultados obtidos a partir da carga inicial.

[Explorar o projeto no portfólio](https://joaozinfcc-gif.github.io/Portfolio_do_pai/html/academia.html)

## Executar

Use um banco de testes e abra os arquivos nesta ordem no MySQL Workbench.

1. [Criação das tabelas](01_criacao_tabelas.sql). O script apaga e recria o banco `academia_boaforma` e define suas 11 tabelas.
2. [Inserção de dados](02_insercao_dados.sql). Popula as tabelas com os registros fictícios usados no trabalho.
3. [Consultas e rotinas](03_consultas.sql). Os exemplos 1 a 26 exploram os dados. O arquivo cria duas triggers e três stored procedures. Os exemplos 27 a 31 demonstram essas rotinas.

## Dois casos para reproduzir

- **Reativação após pagamento.** No exemplo 27, consulte a situação do aluno 12 antes e depois do lançamento. A trigger `trg_pagamento_reativa_aluno` altera o cadastro de INATIVO para ATIVO.
- **Turma lotada.** A consulta 25 mostra a turma 3, de Pilates, com três vagas e três inscritos. A última instrução do exemplo 31 tenta uma quarta inscrição. A trigger `trg_verifica_vagas` devolve o erro previsto e a turma continua com três alunos.

Para reproduzir os resultados originais, comece novamente pelo script 01 em uma instância de testes. Os exemplos finais alteram os dados.

## Referência da disciplina

O enunciado da Profa. Josyane Lannes Florenzano de Souza descreve os requisitos do trabalho e usa um zoológico como exemplo de modelagem. Os três scripts SQL acima implementam o tema escolhido para este projeto, a Academia BoaForma. [Baixar o enunciado (PPTX)](referencias/enunciado-modelagem.pptx)
