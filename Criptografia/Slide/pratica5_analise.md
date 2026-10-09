# Prática 5 — Encontre os Erros de Segurança (Slide 36)

## 📌 Trecho Analisado
```javascript
const senha = document.querySelector("#senha").value;
const hash = await gerarHash(senha, "SHA-256");
localStorage.setItem("senha", hash);
console.log("Senha protegida com criptografia SHA-256");
```

---

## 1. Identificação dos Problemas e Afirmações Inadequadas

1. **Afirmação tecnicamente falsa ("Criptografia SHA-256"):**
   - SHA-256 **NÃO** é criptografia; é uma **função hash criptográfica unidirecional**. Criptografia é bidirecional e reversível mediante uma chave. Hash não cifra dados.
2. **Armazenamento de segredo no `localStorage` do Navegador:**
   - O `localStorage` é texto puro e acessível por qualquer script em execução na mesma origem. Qualquer vulnerabilidade de **XSS (Cross-Site Scripting)** ou extensão maliciosa pode ler o hash da senha imediatamente.
3. **Uso de SHA-256 puro para Senhas (Sem Salt e sem fator de custo):**
   - SHA-256 foi projetado para ser **extremamente rápido**, o que é ideal para verificar integridade de arquivos, mas péssimo para senhas. GPUs modernas conseguem calcular bilhões de hashes SHA-256 por segundo, tornando ataques de dicionário, força bruta e *rainbow tables* triviais.
4. **Cálculo de hash de senha no lado do cliente (Client-Side):**
   - O hash da senha deve ser processado e verificado no **servidor**, utilizando algoritmos de derivação de chaves seguros. Se o cliente envia apenas o hash, esse hash passa a ser o próprio segredo (equivalente à senha em texto claro — ataque do tipo *pass-the-hash*).

---

## 2. Por que SHA-256 Puro NÃO é Recomendado para Armazenamento de Senhas?

- **Baixa Entropia Humana:** Usuários escolhem senhas previsíveis (ex: "123456", "senha123", datas).
- **Altíssima Velocidade de Cálculo:** Um hardware comum com placa de vídeo gamer (GPU) ou ASICs calcula mais de **10 a 50 bilhões de hashes SHA-256 por segundo**. Uma senha de 8 caracteres alfanuméricos pode ser quebrada em minutos.
- **Vulnerabilidade a Tabelas Rainbow (Pré-computação):** Sem *salt*, senhas idênticas produzem hashes idênticos. Atacantes utilizam tabelas pré-computadas para encontrar senhas instantaneamente.

---

## 3. O Papel do Salt e Algoritmos Especializados de Senha

### O que é Salt?
- Um valor aleatório e único gerado para cada usuário (mínimo 16 bytes).
- É anexado à senha antes de gerar o hash.
- **Efeito:** Mesmo que dois usuários tenham a mesma senha (`senha123`), seus hashes serão completamente diferentes, inviabilizando tabelas rainbow e ataques massivos paralelos.

### Algoritmos Recomendados (KDFs com Custo Configurável):
1. **Argon2id (Padrão Ouro Atual):** Vencedor da *Password Hashing Competition*. Oferece resistência contra ataques de GPU e ASIC através de custo de tempo (iterações) e custo de memória (*memory-hard*).
2. **bcrypt:** Algoritmo clássico e altamente testado, baseado no Blowfish, com fator de custo exponencial configurável.
3. **scrypt:** Desenvolvido especificamente para exigir grandes volumes de memória RAM, neutralizando ataques com hardware dedicado (ASIC/FPGA).
4. **PBKDF2:** Padrão do NIST e amplamente adotado em conformidades governamentais (requer alto número de iterações, ex: ≥ 100.000).

---

## 4. Proposta de Arquitetura Correta (Modelo Seguro)

```
[ Navegador do Usuário ]
          │
          │ 1. Envia senha em texto claro via HTTPS (TLS 1.3)
          ▼
   [ Servidor / API ]
          │
          │ 2. Gera Salt aleatório (16 bytes criptográficos)
          │ 3. Executa KDF seguro (Argon2id ou bcrypt)
          │ 4. Gera hash com custo elevado (tempo e memória)
          ▼
[ Banco de Dados Protegido ]
     -> Armazena apenas: id, salt, custo, hash final
```

- **Transporte:** Protegido por TLS/HTTPS (impede interceptação na rede).
- **Persistência:** O servidor nunca armazena a senha original; armazena apenas o hash gerado por KDF com salt.
- **Autenticação:** O servidor gera um token de sessão (como cookie `HttpOnly`, `Secure`, `SameSite=Strict`), impedindo roubo via scripts JavaScript no navegador.
