# Etapa 9 — Discussão de Segurança Aprofundada
> Material Didático: **Laboratório de Hash SHA-256** — Professor Celso Barreto

---

## 1. Por que SHA-256 NÃO é Criptografia?

Existe um equívoco técnico muito comum de estudantes ao chamar a geração de hash de "criptografia".

```
CRIPTOGRAFIA (Bidirecional / Reversível com Chave)
  Dado original ──[ Cifragem com Chave ]──> Dado Cifrado ──[ Decifragem com Chave ]──> Dado Original

HASH (Unidirecional / Irreversível)
  Dado original ──────────────────────────[ SHA-256 ]────────────────────────────────> Resumo Fixo (256 bits)
```

- **Criptografia:** O propósito é **esconder o conteúdo** (confidencialidade) para que apenas quem possui a chave correspondente possa recuperá-lo.
- **Hash:** O propósito é gerar uma **impressão digital fixa** para atestar integridade. Não existe chave para "descriptografar" um hash; a informação é condensada e perdida de forma irreversível.

---

## 2. Por que SHA-256 puro NÃO deve ser usado para Senhas?

Muitos desenvolvedores novatos cometem o erro de fazer:
```javascript
const hashSenha = sha256(senhaUsuario);
salvarNoBanco(hashSenha); // ❌ VULNERABILIDADE GRAVE!
```

### Principais Riscos:
1. **Velocidade Extrema do Algoritmo:**
   - O SHA-256 foi projetado para calcular resumos em alta velocidade (útil para verificar integridade de gigabytes de dados).
   - Placas de vídeo modernas (GPUs) conseguem testar mais de **50 bilhões de hashes SHA-256 por segundo**.
   - Ataques de força bruta e dicionário descobrem senhas humanas comuns em frações de segundo.
2. **Ataques com Tabelas Rainbow:**
   - Como `sha256("123456")` sempre resulta no mesmo hash em qualquer lugar do mundo, invasores usam bancos de dados gigantescos pré-calculados (*rainbow tables*) para consultar senhas instantaneamente.

---

## 3. A Solução Correta: Salt e KDFs Lentos

Para senhas, a indústria de segurança e os padrões da OWASP exigem:

1. **Salt Criptográfico Aleatório:**
   - Um valor único de pelo menos 16 bytes gerado aleatoriamente para cada usuário.
   - Força o atacante a quebrar cada senha individualmente, inviabilizando tabelas rainbow.
2. **Fator de Custo Configurável (KDFs lentos):**
   - Algoritmos projetados deliberadamente para serem **lentos** e consumirem memória RAM (*memory-hard*).
   - Exemplos recomendados:
     - **Argon2id** (Padrão ouro moderno da *Password Hashing Competition*).
     - **bcrypt** (Fator de trabalho exponencial).
     - **scrypt** (Resistente a hardware ASIC/FPGA).
     - **PBKDF2** (Padrão do NIST com ≥ 100.000 iterações).
