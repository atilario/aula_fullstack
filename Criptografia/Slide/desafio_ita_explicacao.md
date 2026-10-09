# Desafio ITA — Representação Não Ambígua antes do SHA (Slide 39)

## 1. O Problema da Concatenação Insegura
Considere os registros:
- **Registro A:** `campo1 = "12"`, `campo2 = "345"`
- **Registro B:** `campo1 = "123"`, `campo2 = "45"`

A implementação:
```javascript
hash = SHA256(campo1 + campo2);
```
Gera:
- Entrada do Registro A: `"12" + "345" = "12345"`
- Entrada do Registro B: `"123" + "45" = "12345"`

Como a concatenação simples não delimita o final do primeiro campo e o início do segundo, as duas entradas resultam na mesmíssima sequência de bytes: `0x31 0x32 0x33 0x34 0x35`.

---

## 2. Por que isso NÃO é uma Colisão no SHA-256?

- Uma **colisão criptográfica** ocorre estritamente quando **duas entradas distintas de bytes** ($X \neq Y$) produzem o mesmo valor de resumo ($H(X) = H(Y)$).
- Neste cenário:
  $$X = \text{"12345"}$$
  $$Y = \text{"12345"}$$
  Portanto, $X = Y$.
- Por definição elementar de função matemática determinística, entradas idênticas obrigatoriamente produzem saídas idênticas ($H(X) = H(X)$).
- A falha não reside na resistência à colisão do SHA-256, mas sim na **camada de aplicação**, devido a uma **ambiguidade na serialização (framing)**.

---

## 3. Projeto de Serialização Canônica Não Ambígua

Para evitar essa ambiguidade, qualquer função de preparação dos dados antes do hash deve garantir a propriedade de **injetividade** (ou seja, registros lógicos diferentes devem mapear para sequências binárias distintas).

### Alternativa 1: Prefixação por Comprimento (Length-Prefixed / Netstrings)
Cada campo é precedido pelo seu tamanho em bytes seguido por um delimitador fixo:
$$\text{Formato: } \text{len}(campo1) : campo1 \mid \text{len}(campo2) : campo2$$

- **Registro A:** `"2:12|3:345"` (Bytes: `[50, 58, 49, 50, 124, 51, 58, 51, 52, 53]`)
- **Registro B:** `"3:123|2:45"` (Bytes: `[51, 58, 49, 50, 51, 124, 50, 58, 52, 53]`)

Como as sequências de bytes são claramente distintas desde o primeiro byte, os hashes resultantes são completamente diferentes.

### Alternativa 2: JSON Canônico Padronizado (RFC 8785)
- Chaves ordenadas lexicograficamente de forma estrita.
- Sem espaços em branco não significativos.
- Preserva a tipagem e os delimitadores estruturais `{ "campo1": "12", "campo2": "345" }`.
