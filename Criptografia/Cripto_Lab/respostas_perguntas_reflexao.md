# Respostas às Perguntas de Reflexão e Autoavaliação
> Roteiro da Aula Prática: **Laboratório de Hash SHA-256** — Professor Celso Barreto

---

## 📌 Etapa 6 — Perguntas de Reflexão

### 1. Os hashes possuem o mesmo tamanho?
**Sim.** Todos os hashes gerados pelo algoritmo SHA-256 possuem rigorosamente **256 bits** (32 bytes), independentemente do tamanho do dado de entrada. Quando representados em formato hexadecimal, cada byte ocupa 2 caracteres, resultando invariavelmente em uma string de **exatamente 64 caracteres hexadecimais**.

### 2. “Celso” e “celso” geram o mesmo resultado?
**Não.** Geram hashes completamente distintos:
- `Celso`: `66a2e850ebdb7c73b38cff1a6eb7589f2a87a2200257008c2a9316d97c02b291`
- `celso`: `f5697669d04bcf831be9e7a2b97fe3605c5443fa9202bdc17b5f25bf6036130b`

A letra maiúscula `'C'` possui o byte ASCII `0x43` (`01000011`), enquanto `'c'` minúscula possui o byte `0x63` (`01100011`). Para uma função hash criptográfica, qualquer diferença binária gera uma saída irreconhecível e independente.

### 3. Alterar apenas um caractere provoca uma pequena ou grande alteração no hash?
**Provoca uma GRANDE alteração.** Esse fenômeno é denominado **Efeito Avalanche (*Avalanche Effect*)**. No SHA-256, a alteração de apenas um único bit na entrada resulta na inversão de aproximadamente **50% de todos os 256 bits** do hash de saída.

### 4. É possível observar o hash e descobrir diretamente o texto original?
**Não.** Funções hash criptográficas possuem a propriedade matemática de **resistência à pré-imagem** (*one-way function* ou função unidirecional). É computacionalmente inviável reverter o hash para obter a entrada original sem recorrer à força bruta ou testes exaustivos.

### 5. Por que o SHA-256 pode ser utilizado para verificar integridade de dados?
Porque ele atua como uma **impressão digital determinística e única**. Se um documento de milhões de linhas sofrer a alteração de um único espaço, vírgula ou byte corrompido em disco/rede, o novo hash calculado será completamente diferente do hash original catalogado. Logo, a igualdade de dois hashes prova matematicamente que o conteúdo permaneceu 100% íntegro.

---

## 📌 Etapa 10 — Autoavaliação da Rubrica

### 1. Consigo explicar por que o hash tem 64 caracteres?
- O algoritmo gera um bloco condensado de **256 bits**.
- 256 bits equivalem a **32 bytes** ($256 \div 8 = 32$).
- Cada byte (com valores de `0` a `255`) é representado em base 16 (hexadecimal) por **2 dígitos** (`00` até `ff`).
- Portanto, $32 \text{ bytes} \times 2 \text{ caracteres/byte} = \mathbf{64 \text{ caracteres hexadecimais}}$.

### 2. Consigo justificar o uso de `await`?
A chamada `crypto.subtle.digest("SHA-256", dados)` é executada de forma **assíncrona** pelo motor criptográfico do navegador para não bloquear a thread principal da interface gráfica (UI). Ela retorna uma `Promise<ArrayBuffer>`. O uso da palavra-chave `await` (dentro de uma função declarada com `async`) pausa de maneira não-bloqueante a execução daquela rotina até que o cálculo matemático dos bytes seja concluído e entregue.

### 3. Consigo mostrar o efeito avalanche com um exemplo?
- **Entrada 1:** `"SEGURANCA2026"` -> `090d480b910fc01519239d8f53ecd310b7edb3495d511981cf4c60900b093d53`
- **Entrada 2:** `"SEGURANCA2027"` -> `751bf0de4b660f3cd8fe6a85efa7f8a6a9f740ca68109e5ea123e1fbc6465f09`
- **Resultado:** A alteração de apenas 1 bit no último dígito (`6` vs `7`) provocou **139 bits divergentes de 256 (54,30% de diferença)**, demonstrando visual e numericamente o efeito avalanche.
