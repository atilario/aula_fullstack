# Módulo de Criptografia e Integridade de Dados 🔐
> Material completo e implementação prática dos slides da aula do **Professor Celso Barreto** — *Criptografia: Fundamentos, algoritmos, hash, SHA-256 e aplicações com JavaScript*.

---

## 📁 Estrutura de Arquivos da Pasta Slide

Todos os 24 arquivos foram desenvolvidos e organizados para cobrir integralmente a parte teórica, os desafios conceituais, as práticas em Node.js e as aplicações interativas no navegador.

| Arquivo | Slide | Tipo | Descrição |
|---|---|---|---|
| [`01_sha256_webcrypto.js`](./01_sha256_webcrypto.js) / [`.html`](./01_sha256_webcrypto.html) | 20, 21 | Código / Demo | Exemplo básico de SHA-256 com Web Crypto API nativa (`crypto.subtle`). |
| [`02_sha256_node.js`](./02_sha256_node.js) | 22 | Código | Exemplo de SHA-256 em Node.js com o módulo nativo `node:crypto`. |
| [`03_aes_gcm_node.js`](./03_aes_gcm_node.js) | 23 | Código | Criptografia simétrica autenticada AES-256-GCM com IV e Auth Tag. |
| [`pratica_guiada_slide25.html`](./pratica_guiada_slide25.html) / [`.js`](./pratica_guiada_slide25.js) | 25 | Aplicação / Script | Prática Guiada: testes 'Celso', 'celso', 'Celso1', 'Celso2' e comparador de dois inputs. |
| [`desafio_slide26_e_pergunta_final.md`](./desafio_slide26_e_pergunta_final.md) | 26, 28 | Teoria / Análise | Resolução do desafio institucional e da pergunta final sobre limitações do hash simples. |
| [`pratica1_sha256_vs_sha512.html`](./pratica1_sha256_vs_sha512.html) / [`.js`](./pratica1_sha256_vs_sha512.js) | 31, 32 | Aplicação / Script | Comparativo completo SHA-256 vs SHA-512, contagem de bits e tabela com string vazia. |
| [`pratica2_efeito_avalanche.html`](./pratica2_efeito_avalanche.html) / [`.js`](./pratica2_efeito_avalanche.js) | 33 | Aplicação / Script | Investigação do efeito avalanche: `SEGURANCA2026` vs `SEGURANCA2027` (54,30% de bits divergentes). |
| [`pratica3_verificador_integridade.html`](./pratica3_verificador_integridade.html) / [`.js`](./pratica3_verificador_integridade.js) | 34 | Aplicação / Script | Verificador de integridade com detecção de espaços, acentos UTF-8 e contagem de bytes. |
| [`pratica4_integridade_arquivo.html`](./pratica4_integridade_arquivo.html) / [`.js`](./pratica4_integridade_arquivo.js) | 35 | Aplicação / Script | Verificação de integridade de arquivos locais via `ArrayBuffer` no navegador. |
| [`pratica5_erros_seguranca.js`](./pratica5_erros_seguranca.js) / [`.md`](./pratica5_analise.md) | 36 | Script / Análise | Correção dos erros de segurança com armazenamento de senhas (PBKDF2/Argon2 + Salt). |
| [`pratica6_hmac_laboratorio.js`](./pratica6_hmac_laboratorio.js) | 37 | Código / Lab | Demonstração prática da vulnerabilidade do hash simples vs autenticidade do HMAC-SHA-256. |
| [`exercicio_decisao_arquitetura.md`](./exercicio_decisao_arquitetura.md) | 38 | Teoria / Análise | Decisão de arquitetura universitária comparando SHA-256, HMAC e Assinatura Digital. |
| [`desafio_ita_serializacao.js`](./desafio_ita_serializacao.js) / [`.md`](./desafio_ita_explicacao.md) | 39 | Código / Teoria | Desafio ITA: Resolução de ambiguidade de concatenação com serialização canônica. |
| [`laboratorio_criptografico.html`](./laboratorio_criptografico.html) | 40 | Aplicação SPA | **Projeto Prático Final:** Aplicação web com os 4 módulos integrados em interface premium. |
| [`relatorio_tecnico_laboratorio.md`](./relatorio_tecnico_laboratorio.md) | 40 | Relatório Técnico | Relatório acadêmico completo com fundamentação, tabelas e evidências dos testes. |

---

## ⚡ Como Executar os Scripts e Aplicações

### 1. No Terminal via Node.js
```bash
# Exemplos da aula
node 01_sha256_webcrypto.js
node 02_sha256_node.js
node 03_aes_gcm_node.js

# Práticas e Investigações
node pratica1_sha256_vs_sha512.js
node pratica2_efeito_avalanche.js
node pratica3_verificador_integridade.js
node pratica4_integridade_arquivo.js
node pratica5_erros_seguranca.js
node pratica6_hmac_laboratorio.js

# Desafio ITA
node desafio_ita_serializacao.js
```

### 2. No Navegador Web
Basta abrir diretamente os arquivos `.html` no Chrome, Edge ou Firefox (ou usar uma extensão de Live Server):
- [`laboratorio_criptografico.html`](./laboratorio_criptografico.html) *(Laboratório Completo do Slide 40)*
- [`01_sha256_webcrypto.html`](./01_sha256_webcrypto.html)
- [`pratica_guiada_slide25.html`](./pratica_guiada_slide25.html)
- [`pratica1_sha256_vs_sha512.html`](./pratica1_sha256_vs_sha512.html)
- [`pratica2_efeito_avalanche.html`](./pratica2_efeito_avalanche.html)
- [`pratica3_verificador_integridade.html`](./pratica3_verificador_integridade.html)
- [`pratica4_integridade_arquivo.html`](./pratica4_integridade_arquivo.html)
