# RELATÓRIO TÉCNICO DE ENGENHARIA
## Projeto Prático: Laboratório Criptográfico e Integridade de Dados
**Curso:** Engenharia da Computação  
**Disciplina:** Criptografia e Integridade de Dados  
**Professor:** Celso Barreto  
**Autor:** Estudante Átila  
**Ambiente:** Web Crypto API Nativa (Navegador) & Node.js Runtime

---

## 1. INTRODUÇÃO E OBJETIVOS

A crescente interconexão de sistemas distribuídos e a dependência de redes públicas demandam garantias matemáticas rigorosas sobre a segurança dos dados. Conforme abordado nas diretrizes curriculares, a segurança da informação é alicerçada em quatro objetivos clássicos:
1. **Confidencialidade:** Garantir que o conteúdo trafegue ou permaneça inacessível para agentes não autorizados.
2. **Integridade:** Assegurar a detecção de qualquer modificação acidental ou intencional nos dados.
3. **Autenticidade:** Comprovar a verdadeira origem da informação e a identidade do emissor.
4. **Não-Repúdio:** Fornecer evidências criptográficas irrefutáveis que impeçam a negação posterior de autoria.

Este relatório consolida a concepção, implementação e testes práticos do **Laboratório Criptográfico**, uma aplicação web desenvolvida integralmente com a **Web Crypto API nativa** (sem dependências externas), complementada por scripts analíticos de bancada em Node.js.

---

## 2. FUNDAMENTAÇÃO TEÓRICA

### 2.1 Criptografia versus Funções Hash Criptográficas
- **Criptografia (Simétrica e Assimétrica):** É uma transformação **bidirecional e reversível**. O texto claro ($M$) é cifrado em texto cifrado ($C$) usando uma chave ($K$), permitindo recuperar a mensagem original mediante $M = D(K, C)$. Seu objetivo primário é a **confidencialidade**.
- **Funções Hash Criptográficas:** São algoritmos **unidirecionais e irreversíveis** ($h = H(M)$). Mapeiam entradas de tamanho arbitrário para saídas de tamanho estritamente fixo. É computacionalmente inviável derivar a mensagem $M$ a partir do hash $h$. Seu objetivo primordial é atestar a **integridade**.

### 2.2 Evolução das Famílias SHA (SHA-1 x SHA-2 x SHA-3)

| Família | Tamanho do Resumo | Arquitetura | Status de Segurança Atual |
|---|---|---|---|
| **SHA-1** | 160 bits (20 bytes) | Merkle–Damgård | **Obsoleto / Inseguro.** Quebrado na prática pelo ataque *SHAttered* em 2017 (colisão prática de PDFs). Não deve ser usado. |
| **SHA-2** | 224, 256, 384, 512 bits | Merkle–Damgård com compressão Davies-Meyer | **Seguro e Padrão da Indústria.** Amplamente empregado em TLS 1.3, Bitcoin, certificados digitais e assinaturas. |
| **SHA-3** | 224, 256, 384, 512 bits | Construção Esponja (*Sponge Function* - Keccak) | **Moderno e Seguro.** Arquitetura matematicamente distinta do SHA-2, servindo como alternativa resiliente a ataques de extensão de comprimento. |

> **Nota:** Não existe o conceito técnico de "SHA-3 é segurança máxima". Tanto SHA-256/512 quanto SHA3-256 oferecem segurança de 128 e 256 bits contra colisões e pré-imagem respectivamente, dependendo do perfil de projeto e hardware.

### 2.3 Integridade versus Autenticidade e Limitações do Hash Simples
- **Integridade:** Responde à pergunta: *"Os dados mudaram desde que o hash foi gerado?"*
- **Autenticidade:** Responde à pergunta: *"Quem gerou esses dados e esse hash?"*

**A falha fatal do Hash Simples:** Como o algoritmo SHA-256 é público, determinístico e não requer chaves, um atacante capaz de interceptar a comunicação em trânsito (*Man-in-the-Middle*) pode alterar o conteúdo da mensagem e **recalcular o novo SHA-256 da mensagem alterada**. O destinatário, ao comparar o novo conteúdo com o novo hash, acreditará falsamente que os dados estão íntegros.  
Portanto, **o hash simples fornece integridade física, mas zero autenticidade contra adversários ativos**.

### 2.4 HMAC (Hash-based Message Authentication Code)
Para suprir essa lacuna, o HMAC combina a função hash com uma chave secreta compartilhada ($K$):
$$\text{tag} = \text{HMAC}(K, M) = H\Big((K \oplus \text{opad}) \parallel H((K \oplus \text{ipad}) \parallel M)\Big)$$
Sem o conhecimento da chave secreta $K$, um invasor é incapaz de forjar uma tag válida para uma mensagem adulterada.

---

## 3. DESCRIÇÃO DA APLICAÇÃO E MÓDULOS DESENVOLVIDOS

O **Laboratório Criptográfico** (`laboratorio_criptografico.html`) foi estruturado em quatro módulos integrados:

1. **Módulo 1 — SHA-256 & SHA-512:**
   - Permite digitação de qualquer string e seleção de algoritmo.
   - Apresenta: entrada, tamanho exato em bytes UTF-8 (`TextEncoder`), algoritmo, bits (256/512) e hexadecimal formatado.
   - Controles de cópia para clipboard e limpeza de tela.
2. **Módulo 2 — Investigação do Efeito Avalanche:**
   - Compara duas entradas simultâneas (`Entrada A` e `Entrada B`).
   - Converte os digests de hexadecimal para binário (256 bits).
   - Renderiza uma matriz gráfica de 256 células e calcula a porcentagem exata de bits invertidos.
3. **Módulo 3 — Verificador de Integridade:**
   - Compara conteúdo original com conteúdo recebido.
   - Detecta discrepâncias mínimas de caracteres invisíveis (espaços, quebras de linha `\n` vs `\r\n`, acentuação e caixa alta/baixa).
4. **Módulo 4 — Comparação Conceitual com HMAC:**
   - Demonstra a diferença prática entre Hash Simples e HMAC-SHA-256 gerado via `crypto.subtle.sign("HMAC", ...)`.
   - Incorpora botão de **Simulação de Ataque**, demonstrando a falha do hash simples e a resiliência do HMAC.

---

## 4. EVIDÊNCIAS EXPERIMENTAIS E RESULTADOS DE TESTES

### Experimento 1: Efeito Avalanche (Entrada A: `SEGURANCA2026` vs Entrada B: `SEGURANCA2027`)
A única alteração entre as duas entradas foi no último caractere ('6' [ASCII `0x36`] para '7' [ASCII `0x37`]), correspondendo a uma variação de **exatamente 1 único bit** nos dados de entrada.

- **Hash A (SEGURANCA2026):** `090d480b910fc01519239d8f53ecd310b7edb3495d511981cf4c60900b093d53`
- **Hash B (SEGURANCA2027):** `751bf0de4b660f3cd8fe6a85efa7f8a6a9f740ca68109e5ea123e1fbc6465f09`
- **Caracteres hexadecimais diferentes:** 63 de 64 caracteres.
- **Bits divergentes calculados:** **139 de 256 bits**.
- **Porcentagem de divergência:** **54.30%**.

**Conclusão Experimental:** O resultado converge perfeitamente com a teoria criptográfica, que prevê que uma função hash ideal deve inverter em média 50% dos bits de saída para cada 1 bit alterado na entrada.

---

### Experimento 2: Comparativo de Tamanhos (Slide 31)

| Entrada | Algoritmo | Bytes Entrada | Bits Saída | Chars Hex Saída | Hash Gerado |
|---|---|---|---|---|---|
| `Professor Celso` | SHA-256 | 15 bytes | 256 | 64 | `1115f3d836984eb055f09e168d558ae2dd9d2002ceed169ed9414d2903a3b1cc` |
| `Professor Celso` | SHA-512 | 15 bytes | 512 | 128 | `bb33d6b0539c8eb74421448b11a7c366eecad9ca92e42b2bb368a5293297a7e8...` |
| `professor Celso` | SHA-256 | 15 bytes | 256 | 64 | `c27d42cfc5264b360251759600b46ebbeec83c27e8a93902f2323a31c5040ffc` |
| `Professor Celso!` | SHA-256 | 16 bytes | 256 | 64 | `c6870c67923758b992f80eb3c46e0e6ea17ebc8f8b3c65c2cf015f62446f25cb` |
| `""` (vazia) | SHA-256 | 0 bytes | 256 | 64 | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` |

**Evidência:** O comprimento do hash é rigorosamente constante, provando que o tamanho da entrada não afeta as dimensões do digest.

---

### Experimento 3: Desafio ITA — Concatenação Ambígua (Slide 39)
- **Registro A:** `campo1 = "12"`, `campo2 = "345"`
- **Registro B:** `campo1 = "123"`, `campo2 = "45"`
- **Concatenação Simples:** `"12345"` (em ambos os casos).
  - Ambos geraram o hash: `5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5`.
- **Com Serialização Canônica Length-Prefixed (`len:val`):**
  - Registro A: `"2:12|3:345"` -> Hash: `af56211c3a67a18647b498ba96a6078dcd96d657143effe6e54cdb0617025f32`
  - Registro B: `"3:123|2:45"` -> Hash: `62b401e0b42188ca9b6919d1b3cc7661227a827e5b07b4707f376a3f388bdf02`

**Evidência:** Os hashes passaram a divergir completamente, comprovando que a falha original era de formatação (camada de aplicação), e não do algoritmo criptográfico.

---

## 5. CONCLUSÃO

Os ensaios demonstraram a robustez do SHA-256 para integridade e a necessidade indispensável de protocolos autenticados (como HMAC e Assinatura Digital) quando existe um modelo de ameaça ativo. O desenvolvimento de software seguro exige o domínio conjunto de:
1. **Serialização canônica rigorosa** antes do hashing;
2. **KDFs dedicados** para proteção de senhas (ex: Argon2/PBKDF2);
3. **Criptografia autenticada (AEAD)** como AES-GCM para confidencialidade;
4. **Verificação de autenticidade com chaves secretas ou pares assimétricos**.
