# Funções em JavaScript 🚀
> Material prático baseado nos slides da aula do **Professor Celso Barreto** — *Funções em JavaScript: Com e sem parâmetros*.

---

## 📁 Organização das Pastas

A estrutura agora está 100% organizada em subpastas:

```
Funções Javascript/
│
├── slides/        # Todos os exemplos e funções resolvidos nos slides
├── exercicios/    # Exercícios práticos propostos no Slide 31
├── desafios/      # Desafios de programação propostos no Slide 32
└── README.md      # Este guia de consulta rápida
```

---

## 📂 1. Exemplos e Funções dos Slides (`slides/`)

| Arquivo | Slide | Função / Tema | Descrição |
|---|---|---|---|
| [`slides/01_nomeDaFuncao.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/01_nomeDaFuncao.js) | 04 | `nomeDaFuncao()` | Estrutura básica de uma função, declaração e chamada. |
| [`slides/02_mostrarAviso.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/02_mostrarAviso.js) | 05 | `mostrarAviso()` | Registro e reexecução da mesma função a cada chamada. |
| [`slides/03_exibirSaudacao.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/03_exibirSaudacao.js) | 06 | `exibirSaudacao()` | Função sem parâmetros com mensagem fixa. |
| [`slides/04_mostrarDataAtual.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/04_mostrarDataAtual.js) | 07 | `mostrarDataAtual()` | Obtém e formata a data atual a partir do ambiente (`Date`). |
| [`slides/05_calcularMediaFixa.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/05_calcularMediaFixa.js) | 08 | `calcularMediaFixa()` | Cálculo interno fixo dentro da própria função. |
| [`slides/06_preencherMensagem.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/06_preencherMensagem.js) / [`.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/06_preencherMensagem.html) | 09 | `preencherMensagem()` | Manipulação do DOM com verificação de segurança. |
| [`slides/07_saudar.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/07_saudar.js) | 11 | `saudar(nome)` | Função com 1 parâmetro tornando o código reutilizável. |
| [`slides/08_mostrarDobro.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/08_mostrarDobro.js) | 13 | `mostrarDobro(numero)` | Um parâmetro numérico calculando o dobro. |
| [`slides/09_somar.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/09_somar.js) | 14 | `somar(numero1, numero2)` | Dois parâmetros e a importância da ordem dos argumentos. |
| [`slides/10_exibirAluno.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/10_exibirAluno.js) | 15 | `exibirAluno(nome, curso, semestre)` | Múltiplos parâmetros para exibição de ficha de aluno. |
| [`slides/11_apresentar.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/11_apresentar.js) | 16 | `apresentar(nome, perfil = 'Aluno')` | Parâmetro com valor padrão para evitar `undefined`. |
| [`slides/12_calcularMedia.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/12_calcularMedia.js) | 17 | `calcularMedia(nota1, nota2)` | Uso da palavra-chave `return` para devolver valores. |
| [`slides/13_verificarMaioridade.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/13_verificarMaioridade.js) | 19 | `verificarMaioridade(idade)` | Retorno booleano (`true`/`false`) para tomadas de decisão. |
| [`slides/14_dividir.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/14_dividir.js) | 20 | `dividir(dividendo, divisor)` | Retorno antecipado (early return) e validação de divisão por zero. |
| [`slides/15_exibirProduto.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/15_exibirProduto.js) | 21 | `exibirProduto(produto)` | Passagem de objetos como parâmetro. |
| [`slides/16_calcularTotal.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/16_calcularTotal.js) | 22 | `calcularTotal(valores)` | Passagem de arrays/vetores como parâmetro e iteração `for..of`. |
| [`slides/17_mostrarTurma.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/17_mostrarTurma.js) | 23 | `mostrarTurma(nomeTurma)` | Diferença entre escopo global e escopo local de variáveis. |
| [`slides/18_multiplicar.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/18_multiplicar.js) | 24 | `multiplicar` | Expressão de função atribuída a uma variável (`const`). |
| [`slides/19_quadrado.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/19_quadrado.js) | 25 | `quadrado()` / `quadradoArrow` | Comparação entre função tradicional e Arrow Function. |
| [`slides/20_mudarCor.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/20_mudarCor.js) / [`.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/20_mudarCor.html) | 26 | `mudarCor(cor)` | Integração HTML + JS: alteração de cor de fundo via botão. |
| [`slides/21_cumprimentar.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/21_cumprimentar.js) / [`.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/21_cumprimentar.html) | 27 | `criarMensagem()`, `cumprimentar()` | Formulário com leitura de input e renderização em parágrafo. |
| [`slides/22_calcularDesconto.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/22_calcularDesconto.js) | 30 | `calcularDesconto(preco, percentual = 10)` | Exemplo integrado completo: validação, valor padrão e cálculo. |

---

## 📝 2. Exercícios Práticos Resolvidos (`exercicios/` - Slide 31)

1. [`exercicios/ex01_mostrarNome.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex01_mostrarNome.js) — [`mostrarNome()`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex01_mostrarNome.js#L4): Exibe seu nome no console.
2. [`exercicios/ex02_receberNome.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex02_receberNome.js) — [`receberNome(nome)`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex02_receberNome.js#L4): Exibe uma saudação personalizada.
3. [`exercicios/ex03_calcularArea.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex03_calcularArea.js) — [`calcularArea(base, altura)`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex03_calcularArea.js#L4): Calcula e retorna a área de um retângulo.
4. [`exercicios/ex04_verificarAprovacao.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex04_verificarAprovacao.js) — [`verificarAprovacao(media)`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex04_verificarAprovacao.js#L4): Retorna "Aprovado" ou "Reprovado".
5. [`exercicios/ex05_converterCelsius.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex05_converterCelsius.js) — [`converterCelsius(fahrenheit)`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex05_converterCelsius.js#L5): Converte Fahrenheit em Celsius.
6. [`exercicios/ex06_mudarCorBotao.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex06_mudarCorBotao.html) — [`alterarCorFundo(cor)`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex06_mudarCorBotao.html#L70): Botões HTML enviando cor por parâmetro.

---

## 🏆 3. Desafios de Programação Resolvidos (`desafios/` - Slide 32)

1. [`desafios/desafio01_calcularIMC.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio01_calcularIMC.js) — [`calcularIMC(peso, altura)`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio01_calcularIMC.js#L4): Validação de entrada e retorno de objeto com classificação.
2. [`desafios/desafio02_calcularConta.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio02_calcularConta.js) — [`calcularConta(consumo, tarifa)`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio02_calcularConta.js#L4): Devolve o valor formatado em reais (`R$`).
3. [`desafios/desafio03_contarPares.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio03_contarPares.js) — [`contarPares(numeros)`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio03_contarPares.js#L4): Retorna a quantidade de pares no array.
4. [`desafios/desafio04_cadastrarAluno.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio04_cadastrarAluno.js) — [`cadastrarAluno(nome, curso, notas)`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio04_cadastrarAluno.js#L4): Objeto completo com média calculada e situação.
5. [`desafios/desafio05_calculadora.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio05_calculadora.html) / [`desafios/desafio05_calculadora.js`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio05_calculadora.js) — [`calcular(n1, n2, operacao)`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio05_calculadora.js#L5): Calculadora completa passando a operação por parâmetro.

---

## ⚡ Como Executar

### Via Terminal com Node.js
```bash
# Rodar exemplo dos slides
node slides/08_mostrarDobro.js
node slides/22_calcularDesconto.js

# Rodar exercícios
node exercicios/ex03_calcularArea.js

# Rodar desafios
node desafios/desafio01_calcularIMC.js
```

### No Navegador
Para testar os arquivos HTML (`.html`), basta abrir no navegador:
- [`slides/06_preencherMensagem.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/06_preencherMensagem.html)
- [`slides/20_mudarCor.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/20_mudarCor.html)
- [`slides/21_cumprimentar.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/slides/21_cumprimentar.html)
- [`exercicios/ex06_mudarCorBotao.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/exercicios/ex06_mudarCorBotao.html)
- [`desafios/desafio05_calculadora.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Funções%20Javascript/desafios/desafio05_calculadora.html)
