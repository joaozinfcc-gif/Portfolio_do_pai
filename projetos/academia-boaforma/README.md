# Academia BoaForma — banco de dados relacional
Projeto acadêmico de Modelagem de Banco de Dados (2026), com implementação em MySQL.

## Objetivo
Organizar alunos, planos, instrutores, modalidades, turmas, inscrições, pagamentos, fichas de treino, exercícios e frequência.

## Implementação
- 11 tabelas, incluindo duas associativas para relações N:N.
- 26 consultas básicas e intermediárias (JOIN, agregação, subconsultas, UNION).
- 2 triggers: reativação por pagamento e controle de vagas.
- 3 stored procedures: cadastro de aluno, relatório mensal e pendências.
- Dados de teste fictícios e cinco exemplos numerados de testes das rotinas.

## Executar
Use uma instância de desenvolvimento do MySQL e o MySQL Workbench. Execute 01, 02 e 03 nessa ordem. **O script 01 usa DROP DATABASE IF EXISTS academia_boaforma e apaga o banco com esse nome.** A última instrução do script 03 falha de propósito ao tentar inserir um aluno em uma turma lotada. Execute os testes individualmente. Para repetir do zero, recrie apenas o banco de teste.

Os scripts preservam o conteúdo fornecido. O material de orientação da disciplina não é uma entrega do projeto e não foi publicado.
