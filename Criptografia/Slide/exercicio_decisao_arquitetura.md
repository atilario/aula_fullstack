# Exercício — Decisão de Arquitetura (Slide 38)
**Cenário:** Sistema Universitário de Submissão de Trabalhos Digitais.  
**Requisitos do Sistema:**
1. Detectar qualquer alteração ou corrupção no documento (Integridade).
2. Comprovar de forma incontestável que o trabalho partiu de uma identidade autorizada (Autenticidade e Não-Repúdio).

---

## 1. Matriz Comparativa das Três Propostas

| Critério | Equipe A: SHA-256(doc) | Equipe B: HMAC-SHA-256(doc, K) | Equipe C: Assinatura Digital (Chave Privada/Pública) |
|---|---|---|---|
| **Integridade** | ✅ Alta (detecta alteração acidental) | ✅ Alta (detecta adulteração) | ✅ Alta (detecta qualquer adulteração nos bytes) |
| **Autenticidade** | ❌ **Nula** (não identifica o autor) | ⚠️ Parcial (apenas entre quem tem $K$) | ✅ **Total** (vinculada à identidade do signatário) |
| **Não-Repúdio** | ❌ Não fornece | ❌ **Falha grave** (ambas as partes possuem $K$) | ✅ **Garantido** (apenas o aluno tem a chave privada) |
| **Gestão de Chaves** | Não utiliza chaves | ❌ **Inviável/Complexa** (milhares de segredos simétricos) | ✅ **Escalável** (PKI: chaves públicas cadastradas) |
| **Auditoria por Terceiros** | ❌ Inútil para provar autoria | ❌ Impossível sem vazar o segredo $K$ | ✅ **Perfeita** (banca externa valida com chave pública) |

---

## 2. Análise do Modelo de Ameaça (Threat Model)

### Ameaça 1: Man-in-the-Middle ou Substituição de Arquivo
- **Proposta A (SHA-256 simples):** Um atacante intercepta a requisição, substitui o trabalho por um arquivo em branco ou plágio e recalcula o SHA-256. O servidor recebe o novo arquivo, calcula o hash correspondente e conclui que está "íntegro". **Ataque bem-sucedido.**
- **Proposta B e C:** O atacante não tem acesso ao material criptográfico privativo do aluno, sendo imediatamente bloqueado.

### Ameaça 2: Disputa de Autoria e Fraude Interna (Problema do Repúdio)
- Um aluno tira nota zero e afirma: *"Não fui eu quem enviei este arquivo; alguém na universidade forjou"*.
- Ou um administrador corrupto altera o arquivo de um aluno para prejudicá-lo.
- **Proposta B (HMAC com segredo compartilhado):** Como a universidade e o aluno compartilham exatamente a mesma chave secreta $K$, qualquer um dos dois pode gerar a tag HMAC. A universidade não consegue provar juridicamente se foi o aluno ou um funcionário interno quem gerou aquela tag. O aluno pode repudiar o envio.
- **Proposta C (Assinatura Digital):** Somente o aluno possui sua chave privada. A universidade possui apenas a chave pública (capaz de **verificar**, mas incapaz de **assinar**). Logo, há prova matemática cabal de não-repúdio.

### Ameaça 3: Validação por Bancas Externas ou Órgãos de Regulação (MEC)
- Para uma banca examinadora externa auditar a veracidade do envio:
- Na **Proposta B**, a universidade teria que entregar a chave secreta $K$ para os auditores, quebrando todo o sigilo futuro.
- Na **Proposta C**, os auditores recebem apenas a chave pública do aluno (ou certificado digital X.509) e validam o trabalho de forma autônoma e segura.

---

## 3. Recomendação Técnica Justificada

> **Recomendação Definitiva: Adoção da Proposta da Equipe C (Assinatura Digital baseada em Criptografia Assimétrica).**

### Arquitetura de Implementação Recomendada:
1. **Padrão Criptográfico:** `ECDSA` (Curva elíptica P-256 ou Ed25519) com digest `SHA-256`.
2. **Ciclo de Submissão:**
   - O aluno efetua login autenticado no portal institucional.
   - O cliente (navegador/aplicativo) calcula `hash = SHA256(arquivo)`.
   - O hash é assinado com a chave privada do aluno: `assinatura = Sign(chavePrivadaAluno, hash)`.
   - São transmitidos: o arquivo, os metadados canônicos, a assinatura e o identificador do certificado público.
3. **Validação no Servidor:**
   - O servidor recupera a chave pública do aluno registrada em seu cadastro.
   - Executa `Verify(chavePublicaAluno, hash, assinatura)`.
   - Se válida, o trabalho é registrado com carimbo de tempo (*timestamp* criptográfico).
