# Projeto Individual de Desenvolvimento Web • Revisão AV1
**Universidade SENAI CIMATEC**  
**Docente:** Professor Celso Barreto  
**Discente:** Átila Leite (Engenharia da Computação - 6º Semestre)  

---

## 📌 Sobre o Projeto
Aplicação web construída em **React + Vite** funcionando como portfólio acadêmico das **30 atividades sequenciais** propostas no roteiro prático da disciplina. A homepage demonstra de ponta a ponta a evolução técnica em:
- **HTML5 Semântico e Acessibilidade (WCAG)**
- **CSS3 Moderno** (Variáveis CSS, CSS Grid responsivo com `minmax`, Flexbox, temas Claro/Escuro)
- **React 18** (Componentização atômica, Props, Hooks `useState`, `useEffect`, `useMemo`, formulários controlados)
- **Versionamento com Git** (Commits descritivos, branches e tags)
- **Implantação Contínua na Vercel**

---

## 🚀 Tecnologias Utilizadas
- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [CSS3 Custom Properties](https://developer.mozilla.org/pt-BR/docs/Web/CSS/--*)
- [Git & GitHub](https://git-scm.com/)
- [Vercel](https://vercel.com/)

---

## 📁 Estrutura de Pastas

```text
atividadeRevisãoAV1/
├── index.html               # Estrutura HTML base com meta tags
├── package.json             # Dependências e scripts do projeto
├── vite.config.js           # Configuração do Vite + React
├── README.md                # Documentação técnica de entrega
└── src/
    ├── main.jsx             # Ponto de entrada do React
    ├── index.css            # Variáveis CSS, temas Dark/Light e responsividade
    ├── App.jsx              # Componente orquestrador da homepage
    ├── data/
    │   └── atividades.js    # Dados das 30 atividades isolados da UI
    └── components/
        ├── Cabecalho.jsx      # Header com navegação e alternador de tema
        ├── BarraProgresso.jsx # Barra e percentual acessível de conclusão
        ├── FiltrosBusca.jsx   # Input controlado e botões de filtro
        ├── CardAtividade.jsx  # Cartão individual com status condicional
        ├── ModalDetalhes.jsx  # Modal interativo acessível (tecla Esc)
        ├── Sobre.jsx          # Seção de autoria e competências
        ├── Contato.jsx        # Formulário com validação e feedback
        └── Rodape.jsx         # Rodapé institucional com ano dinâmico
```

---

## ⚙️ Pré-requisitos e Execução Local

Você precisará do [Node.js](https://nodejs.org/) (versão 18 ou superior) instalado em seu computador.

1. **Clone o repositório ou acerte a pasta do projeto:**
   ```bash
   cd atividadeRevisãoAV1
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor local de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a URL exibida no terminal: `http://localhost:5173/`

4. **Gerar build para produção:**
   ```bash
   npm run build
   ```

---

## 🌐 Links da Aplicação e Entrega

- **URL Pública na Vercel:** `[Inserir link da Vercel após publicação]`
- **Repositório no GitHub:** `[Inserir link do repositório no GitHub]`

---

## 📝 Itens da Entrega Final (Conforme Roteiro AV1)

1. **Nome completo e turma:** Átila Leite • Engenharia da Computação • Turma Desenvolvimento Web • SENAI CIMATEC
2. **Relato de três dificuldades encontradas e como foram superadas:**
   - *Gerenciamento de Estado sem Redundância:* Ao calcular o progresso das atividades, evitou-se armazenar um estado extra `concluidas` duplicado, derivando o valor diretamente da lista de dados com `atividades.filter()`.
   - *Acessibilidade do Modal com Teclado:* O modal foi aprimorado adicionando um ouvinte para a tecla `Escape` via `useEffect`, garantindo conformidade com padrões de acessibilidade.
   - *Grade Fluida sem Quebra Horizontal:* Foi empregado `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` no CSS Grid, permitindo que os 30 cards se redistribuam naturalmente de 1 a 3 colunas de acordo com a largura da tela.
3. **Atividade com maior destaque técnico:**
   - **Atividade 21 (Criar modal de detalhes com fechamento acessível)** e **Atividade 17/18 (Filtros dinâmicos e busca em tempo real com `useMemo`)**, pois aliam ergonomia visual a boas práticas de imutabilidade e reatividade do React.

