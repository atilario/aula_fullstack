# Cripto_Lab — Laboratório Prático de SHA-256 🧪
> Baseado no roteiro prático oficial: [Roteiro Aula Laboratório SHA-256 (Canva)](https://senaiba.my.canva.site/cripto1) — **Professor Celso Barreto**.

---

## 📁 Estrutura de Arquivos do Projeto

```
Cripto_Lab/
│
├── index.html                           # Aplicação web principal do Laboratório SHA-256
├── style.css                            # Folha de estilos moderna, responsiva e acessível
├── script.js                            # Lógica completa com Web Crypto API nativa
├── roteiro_laboratorio.html             # Roteiro interativo completo com 10 etapas e progresso
├── respostas_perguntas_reflexao.md      # Respostas formais das 5 perguntas de reflexão e rubrica
│
└── etapas/                              # Módulos específicos das etapas do roteiro
    ├── etapa08_desafio_segunda_versao.html  # Desafio autônomo da Etapa 8
    ├── etapa09_discussao_seguranca.md       # Teoria crítica de segurança (Hash ≠ Criptografia)
    └── etapa10_problema_final.html          # Solução do problema empresarial de auditoria (Etapa 10)
```

---

## 🚀 Como Executar

### 1. Aplicação Principal do Laboratório
Abra o arquivo [`index.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Criptografia/Cripto_Lab/index.html) diretamente no seu navegador (Google Chrome, Microsoft Edge ou Mozilla Firefox):
- **Geração de SHA-256:** digite qualquer texto e clique em **Gerar SHA-256**.
- **Contador em tempo real:** informa a quantidade de caracteres inseridos.
- **Botão Copiar Hash:** copia para a área de transferência usando a API do Clipboard.
- **Comparador de Dois Dados:** testa se duas entradas geram a mesma impressão digital ou se houve alteração.
- **Tabela de Experimentos:** execute os testes pré-configurados da aula (`Celso`, `celso`, `Celso1`, `Celso2`, `Professor`, `Professor Celso`).

### 2. Roteiro Interativo Completo da Aula
Abra o arquivo [`roteiro_laboratorio.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Criptografia/Cripto_Lab/roteiro_laboratorio.html):
- Contém a linha do tempo completa das 10 etapas pedagógicas (aproximadamente 2 horas de aula).
- Barra de progresso com checkboxes para acompanhar seu avanço.
- Blocos de código com botões de cópia.

### 3. Desafio da Segunda Versão (Etapa 8)
Abra [`etapas/etapa08_desafio_segunda_versao.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Criptografia/Cripto_Lab/etapas/etapa08_desafio_segunda_versao.html):
- Versão autônoma construída conforme os requisitos do desafio da etapa 8.

### 4. Problema Final Corporativo (Etapa 10)
Abra [`etapas/etapa10_problema_final.html`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Criptografia/Cripto_Lab/etapas/etapa10_problema_final.html):
- Cenário de auditoria empresarial verificando se lotes de dados sofreram alterações durante o processamento.

---

## 📝 Respostas Pedagógicas
O arquivo [`respostas_perguntas_reflexao.md`](file:///c:/Users/ATILA/OneDrive/Área%20de%20Trabalho/FullStack/Criptografia/Cripto_Lab/respostas_perguntas_reflexao.md) traz a resolução técnica detalhada:
1. Por que todos os hashes SHA-256 possuem 64 caracteres hexadecimais (256 bits)?
2. A diferença entre `Celso` e `celso` e o conceito de Efeito Avalanche.
3. Impossibilidade de reversão direta (resistência à pré-imagem).
4. Justificativa do uso de `async/await` com Promises da Web Crypto API.
