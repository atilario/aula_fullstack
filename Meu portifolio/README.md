# 🚀 Portfólio Moderno em React - Átila Leite

Este projeto é uma aplicação web moderna desenvolvida com **React 18**, **JavaScript (ES6+)** e **CSS3 Moderno** (com suporte a Glassmorphism, Dark/Light Mode e Design System modular).

---

## 📂 Estrutura de Arquivos

```
Meu portifolio/
├── index.html       # Arquivo principal (Ponto de entrada da aplicação React)
├── app.js           # Código React com os componentes e dados do portfólio
├── style.css        # Design System completo, temas e animações
└── README.md        # Documentação do projeto
```

---

## 🌟 Funcionalidades Implementadas

1. **Arquitetura React 18 & Componentes**:
   - `Navbar`: Menu de navegação fixo com efeito blur (Glassmorphism), indicador de status e botão de alternância de tema.
   - `HeroSection`: Apresentação de alto impacto com badges, métricas e botões de chamada para ação.
   - `AboutSection`: Seção sobre mim com destaques acadêmicos no SENAI CIMATEC e cards das frentes de estudo.
   - `SkillsSection`: Filtro interativo por categorias (*Dados & IA*, *Full Stack & Web*, *Hardware & IoT*, *Linguagens & Sistemas*) com barras dinâmicas de progresso.
   - `ProjectsSection`: Busca em tempo real por nome/tecnologia, filtro por categorias e **Modal Interativo de Detalhes**.
   - `JourneySection`: Linha do tempo visual da evolução acadêmica e técnica.
   - `ContactSection`: Formulário interativo com validação e canais diretos de contato (E-mail, LinkedIn, GitHub).
   - `Footer`: Rodapé elegante com botão de retorno suave ao topo.

2. **Alternância de Tema (Dark / Light Mode)**:
   - Suporte completo com persistência automática no `localStorage`.

3. **Totalmente Responsivo**:
   - Otimizado tanto para monitores desktop ultrawide quanto para tablets e smartphones (com menu hambúrguer interativo).

---

## 💻 Como Executar

Não é necessário instalar ferramentas pesadas ou compiladores externos para visualizar:

1. **Opção 1 (VS Code Live Server)**:
   - Abra a pasta no VS Code, clique com o botão direito no `index.html` e selecione **"Open with Live Server"**.

2. **Opção 2 (Direto no Navegador)**:
   - Dê um duplo clique no arquivo `index.html` para abrir diretamente no Chrome, Edge, Firefox ou seu navegador favorito.

---

## 🛠️ Como Personalizar

- Para alterar seus dados pessoais, redes sociais, projetos ou habilidades, abra o arquivo `app.js` e edite o objeto `portfolioData` no início do arquivo.
- Para personalizar cores, fontes ou tamanhos, edite as variáveis no início do arquivo `style.css` na seção `:root`.
