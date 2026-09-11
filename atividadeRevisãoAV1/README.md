# Projeto Individual de Desenvolvimento Web - Revisão AV1
Universidade SENAI CIMATEC  
Disciplina: Desenvolvimento Web  
Docente: Prof. Celso Barreto  
Discente: Átila Leite (Engenharia da Computação - 6º Semestre)  

---

## Descrição do Projeto
Portfólio acadêmico desenvolvido em React e Vite para documentar a execução sequencial das 30 atividades práticas propostas no roteiro da disciplina. O projeto apresenta a evolução técnica do desenvolvimento front-end, abrangendo estrutura semântica, estilização responsiva com CSS Grid e Flexbox, componentização, controle de estado com Hooks, formulário validado e preparação para publicação contínua.

---

## Tecnologias Empregadas
- React 18
- Vite 5
- JavaScript (ES6+)
- CSS3 (Variáveis CSS, CSS Grid e Flexbox)
- Git e GitHub
- Vercel

---

## Estrutura do Projeto

```text
atividadeRevisãoAV1/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── data/
    │   └── atividades.js
    └── components/
        ├── Cabecalho.jsx
        ├── BarraProgresso.jsx
        ├── FiltrosBusca.jsx
        ├── CardAtividade.jsx
        ├── ModalDetalhes.jsx
        ├── Sobre.jsx
        ├── Contato.jsx
        └── Rodape.jsx
```

---

## Instruções de Instalação e Execução

### Pré-requisitos
- Node.js instalado (versão 18 ou superior)
- npm ou gerenciador de pacotes equivalente

### Passos para execução
1. Acessar a pasta do projeto:
   ```bash
   cd atividadeRevisãoAV1
   ```
2. Instalar as dependências:
   ```bash
   npm install
   ```
3. Iniciar o servidor local de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Gerar build de produção para validação:
   ```bash
   npm run build
   ```

---

## Links de Entrega
- Aplicação na Vercel: https://aula-fullstack-gamma.vercel.app
- Repositório no GitHub: https://github.com/atilario/aula_fullstack/tree/main/atividadeRevisãoAV1

---

## Respostas aos Itens de Entrega da Avaliação

### 1. Identificação
- Nome: Átila Leite
- Curso: Engenharia da Computação
- Instituição: SENAI CIMATEC

### 2. Dificuldades Encontradas e Soluções Adotadas
1. **Cálculo de Progresso e Gerenciamento de Estado:** Inicialmente, cogitou-se armazenar um contador separado no estado do React para as atividades concluídas. A solução adotada foi derivar esse valor diretamente da lista de dados utilizando `atividades.filter()`, eliminando redundâncias e mantendo uma única fonte de verdade na aplicação.
2. **Acessibilidade e Navegação por Teclado no Modal:** Na implementação da janela de detalhes, foi necessário garantir que usuários pudessem fechá-la sem a dependência exclusiva do mouse. Adicionou-se um ouvinte para a tecla Escape através de um hook `useEffect`, incluindo a devida função de limpeza de listener na desmontagem do componente.
3. **Distribuição dos Cartões sem Quebra de Layout:** Para organizar os 30 cartões sem gerar rolagem horizontal em telas menores, utilizou-se CSS Grid com a regra `repeat(auto-fit, minmax(320px, 1fr))`. Isso garantiu que a grade se adaptasse automaticamente entre 1, 2 e 3 colunas conforme o espaço disponível no viewport.

### 3. Atividade com Maior Destaque Técnico
A atividade de maior destaque foi a **Atividade 21 (Criação do Modal de Detalhes)**, combinada com as **Atividades 17 e 18 (Filtros por tecnologia e busca textual em tempo real)**. A implementação utilizou o hook `useMemo` para garantir filtragem imutável com boa performance, além de compor uma interface limpa com renderização condicional clara.
