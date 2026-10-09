# Análise Crítica: Desafio Institucional e Pergunta Final (Slides 26 e 28)

## 📌 Cenário do Slide 26
Uma instituição de ensino armazena `SHA256(matrícula + disciplina + conteúdo)` para verificar a integridade de notas e trabalhos.

---

## 1. Análise de Ambiguidade da Concatenação e Caso Problemático

A concatenação direta de strings sem delimitador `matrícula + disciplina + conteúdo` é **ambígua e insegura**.

### Demonstração de Caso Problemático:
- **Estudante A:**
  - Matrícula: `100`
  - Disciplina: `F1` (Física 1)
  - Conteúdo: `Nota: 10`
  - Concatenação: `"100"` + `"F1"` + `"Nota: 10"` = `"100F1Nota: 10"`

- **Estudante B:**
  - Matrícula: `10`
  - Disciplina: `0F1` (Código de turma 0F1)
  - Conteúdo: `Nota: 10`
  - Concatenação: `"10"` + `"0F1"` + `"Nota: 10"` = `"100F1Nota: 10"`

**Consequência:** As duas submissões de estudantes e disciplinas completamente diferentes geram a mesmíssima entrada e o mesmo hash `SHA-256`. Um registro pode ser substituído pelo outro no banco de dados sem que o validador de integridade simples aponte qualquer erro.

---

## 2. Projeto de Representação Canônica para os Campos

Para garantir a propriedade de não-ambiguidade (*framing unicity*):
1. **Abordagem com Delimitador Escapeado / Prefixo de Tamanho:**
   $$\text{Entrada Canônica} = \text{len}(matrícula) : matrícula \mid \text{len}(disciplina) : disciplina \mid \text{len}(conteúdo) : conteúdo$$
   - Estudante A: `"3:100|2:F1|8:Nota: 10"`
   - Estudante B: `"2:10|3:0F1|8:Nota: 10"`
2. **Abordagem JSON Canônico:**
   ```json
   {"conteudo":"Nota: 10","disciplina":"F1","matricula":"100"}
   ```

---

## 3. Por que um Atacante que Altera Dado e Hash Derrota o Hash Simples? (Pergunta Final - Slide 28)

> **Pergunta:** *"Se um atacante consegue alterar o dado e também substituir o SHA-256 armazenado, o hash simples ainda garante autenticidade?"*

**Resposta:** **NÃO. A autenticidade é COMPLETAMENTE NULA.**

### Justificativa:
1. **Função Pública e Determinística:** O algoritmo SHA-256 não utiliza nenhuma chave secreta. Qualquer pessoa (incluindo o atacante com acesso ao banco de dados ou em trânsito) pode calcular `SHA-256(novoDado)`.
2. **Falsa Sensação de Segurança:** Se o invasor altera a nota de `5.0` para `10.0` e simultaneamente atualiza a coluna `hash_sha256` no banco com o novo hash correspondente a `10.0`, o validador do sistema irá ler a nota `10.0`, calcular o SHA-256 e compará-lo com o valor do banco. Como ambos são iguais, o sistema atestará falsamente que o dado é íntegro e autêntico.
3. **Conclusão:** O hash simples verifica apenas se o dado não sofreu corrupção **acidental** de disco ou rede (*bit flip*). Ele **não protege contra adversários ativos**.

---

## 4. Comparação entre Mecanismos e Proposta de Arquitetura Superior

| Mecanismo | Proteção Contra Adulterador com Acesso aos Dados | Autentica a Origem? | Gestão de Chaves |
|---|---|---|---|
| **SHA-256 Simples** | ❌ Nenhuma (atacante recalcula o hash) | ❌ Não | Sem chaves |
| **HMAC-SHA-256** | ✅ Sim (atacante não tem a chave secreta) | ⚠️ Simétrica (entre partes) | Requer segredo compartilhado |
| **Assinatura Digital (Asymmetric)** | ✅ Sim (atacante não tem a chave privada) | ✅ Sim (não-repúdio individual) | PKI com chaves públicas |

### Arquitetura Proposta:
Para um ambiente institucional onde múltiplos professores lançam notas e alunos consultam:
- **Assinatura Digital com ECDSA (P-256/SHA-256) ou HMAC no Servidor de Aplicação Centralizado:**
  - O professor ou o microsserviço de notas assina o registro canônico utilizando sua chave privada (ou chave protegida em módulo HSM/KMS na nuvem).
  - O banco de dados armazena os dados acompanhados da **assinatura criptográfica**.
  - Mesmo que um invasor tenha acesso direto de escrita ao banco de dados (via SQL Injection ou comprometimento do DBA), ele **não conseguirá gerar uma assinatura válida**, pois a chave privada reside de forma isolada na camada de segurança criptográfica.
