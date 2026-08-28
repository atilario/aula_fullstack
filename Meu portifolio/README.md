# 🚀 Portfólio Moderno em React + Vite - Átila Leite

Aplicação web profissional construída com **React 18**, **Vite**, **JSX**, **CSS3 Moderno** (com Glassmorphism, Dark/Light Mode e Design System modular).

---

## 📂 Estrutura do Projeto

```
Meu portifolio/
├── package.json       # Configuração de dependências e scripts (Vite, React)
├── vite.config.js     # Configuração do Vite com plugin do React
├── index.html         # Ponto de entrada HTML do Vite
├── src/
│   ├── main.jsx       # Ponto de montagem raiz do ReactDOM
│   ├── App.jsx        # Componentes em React com JSX e estado (Hooks)
│   └── style.css      # Design System completo e temas Dark/Light
└── README.md          # Documentação do projeto
```

---

## 💻 Como Rodar o Projeto com Node.js & Vite

### 1. Instalar as dependências
Abra o terminal na pasta `Meu portifolio` e execute:
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento
Execute o comando:
```bash
npm run dev
```
O Vite iniciará o servidor local instantaneamente (geralmente em `http://localhost:5173`).

---

## 🌟 Funcionalidades Implementadas

1. **Arquitetura React 18 & Componentes (`src/App.jsx`)**:
   - `Navbar`: Menu de navegação com Glassmorphism, indicador de status e botão de alternância de tema.
   - `HeroSection`: Apresentação de impacto com badges do SENAI CIMATEC e botões de ação.
   - `AboutSection`: Seção sobre mim com destaques acadêmicos e cards das frentes tecnológicas.
   - `SkillsSection`: Filtro interativo por categorias com barras dinâmicas de progresso.
   - `ProjectsSection`: Busca em tempo real e **Modal Interativo de Detalhes**.
   - `JourneySection`: Linha do tempo visual da evolução acadêmica e técnica.
   - `ContactSection`: Formulário interativo com validação de campos.
   - `Footer`: Rodapé elegante com botão suave de retorno ao topo.

2. **Alternância de Tema (Dark / Light Mode)**:
   - Suporte completo com persistência automática no `localStorage`.

3. **100% Responsivo**:
   - Otimizado para desktop, tablets e smartphones.
