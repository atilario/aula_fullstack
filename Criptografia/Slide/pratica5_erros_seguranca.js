// Slide 36: Prática 5 — Demonstração de Segurança e Análise de Senhas
// Compara o problema do SHA-256 puro vs Funções KDF seguras (PBKDF2 / Argon2 / bcrypt)

const crypto = require("crypto");

// 1. O código falho do Slide 36:
function gerarHashInseguroSHA256(senha) {
    return crypto.createHash("sha256").update(senha, "utf8").digest("hex");
}

// 2. A implementação recomendada com Salt e KDF (PBKDF2 com custo configurável):
function gerarHashSenhaSeguro(senha, salt = crypto.randomBytes(16).toString("hex"), iteracoes = 100000) {
    // PBKDF2: Password-Based Key Derivation Function 2
    const key = crypto.pbkdf2Sync(senha, salt, iteracoes, 64, "sha256").toString("hex");
    return {
        salt,
        iteracoes,
        hashArmazenado: `$pbkdf2$v=1$i=${iteracoes}$s=${salt}$h=${key}`
    };
}

// Função de verificação resistente a ataques de timing
function verificarSenha(senhaInformada, salt, iteracoes, hashEsperadoHex) {
    const key = crypto.pbkdf2Sync(senhaInformada, salt, iteracoes, 64, "sha256").toString("hex");
    return crypto.timingSafeEqual(Buffer.from(key, "hex"), Buffer.from(hashEsperadoHex, "hex"));
}

console.log("=== Prática 5: Análise de Armazenamento de Senhas (Slide 36) ===\n");

const senhaExemplo = "senha123";

// Demonstração da fragilidade do SHA-256 puro:
const hashFraco = gerarHashInseguroSHA256(senhaExemplo);
console.log("❌ SHA-256 puro (Vulnerável a Rainbow Tables e Brute-Force):");
console.log("Hash:", hashFraco);
console.log("Problema: O mesmo texto sempre gera exatamente este hash em qualquer lugar do mundo!\n");

// Demonstração da solução robusta com Salt e KDF:
const resultadoSeguro = gerarHashSenhaSeguro(senhaExemplo);
console.log("✔ Hash Seguro com Salt Aleatório e 100.000 iterações de PBKDF2:");
console.log("Registro persistido no banco:", resultadoSeguro.hashArmazenado);

const dadosHash = resultadoSeguro.hashArmazenado.split("$");
const keyCalculada = dadosHash[dadosHash.length - 1].replace("h=", "");

const ehValida = verificarSenha(senhaExemplo, resultadoSeguro.salt, resultadoSeguro.iteracoes, keyCalculada);
console.log("\nVerificação de senha com salt e timing-safe:", ehValida ? "✔ Válida" : "✖ Inválida");

module.exports = { gerarHashInseguroSHA256, gerarHashSenhaSeguro, verificarSenha };
