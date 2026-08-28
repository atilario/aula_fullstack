# 📝 lista-participantes • Mostra de Tecnologia

Aplicação em **React** simples e direta para cadastro e gerenciamento de participantes de um evento.

---

## 🎯 Objetivo

Substituir o controle manual em papel por uma página web onde os organizadores possam:
* Cadastrar novos participantes rapidamente.
* Ver o total de inscritos atualizado em tempo real.
* Evitar cadastros com o campo vazio.
* Excluir participantes inseridos por engano.

---

## 📂 Arquivos do Projeto

```
Lista Participantes/
├── index.html       # Página principal com React e execução no navegador
├── package.json     # Configuração do projeto (lista-participantes)
├── src/
│   ├── App.jsx      # Componente principal com os hooks useState
│   └── style.css    # Estilização limpa e centralizada
└── README.md        # Documentação do projeto
```

---

## 💡 Conceitos de React Utilizados

* **`useState`**:
  * `nome`: armazena o que está sendo digitado no input.
  * `participantes`: array contendo a lista de nomes.
  * `erro`: mensagem de aviso quando o campo está em branco.
* **Imutabilidade**: Uso do operador spread `[...participantes, novoNome]` para adicionar novos itens.
* **Renderização de Listas**: Uso da função `.map()` para criar os elementos `<li>`.
* **Remoção com `.filter()`**: Filtra o array excluindo o item pelo índice.

---

## 💻 Como Visualizar

* Basta dar dois cliques no arquivo **`index.html`** para abrir diretamente no navegador ou usar o **Live Server** no VS Code!
