// Slide 23: Exemplo prático de Criptografia Simétrica Autenticada com AES-256-GCM no Node.js
// Conceitos demonstrados:
// 1. Confidencialidade + Autenticidade (Authenticated Encryption with Associated Data - AEAD)
// 2. Chave gerada de forma segura (randomBytes)
// 3. IV/Nonce único de 12 bytes por cifragem (regra estrita do GCM)
// 4. Tag de autenticação (16 bytes) para detectar qualquer adulteração
// 5. Teste prático de adulteração e rejeição de ciphertext corrompido

const crypto = require("crypto");

// Função para cifrar usando AES-256-GCM
function cifrar(textoClaro, chave) {
    // 12 bytes é o tamanho de IV recomendado pelo NIST para modo GCM
    const iv = crypto.randomBytes(12);

    const cipher = crypto.createCipheriv("aes-256-gcm", chave, iv);

    let ciphertext = cipher.update(textoClaro, "utf8", "hex");
    ciphertext += cipher.final("hex");

    // Tag de autenticação gerada pelo GCM
    const authTag = cipher.getAuthTag();

    return {
        iv: iv.toString("hex"),
        ciphertext: ciphertext,
        authTag: authTag.toString("hex")
    };
}

// Função para decifrar usando AES-256-GCM
function decifrar(dadosCifrados, chave) {
    const iv = Buffer.from(dadosCifrados.iv, "hex");
    const authTag = Buffer.from(dadosCifrados.authTag, "hex");

    const decipher = crypto.createDecipheriv("aes-256-gcm", chave, iv);
    decipher.setAuthTag(authTag);

    let textoDecifrado = decipher.update(dadosCifrados.ciphertext, "hex", "utf8");
    textoDecifrado += decipher.final("utf8");

    return textoDecifrado;
}

// ==========================================
// TESTES E DEMONSTRAÇÃO
// ==========================================
console.log("=== DEMONSTRAÇÃO AES-256-GCM (Slide 23) ===\n");

// 1. Gera chave secreta de 256 bits (32 bytes)
const chaveSecreta = crypto.randomBytes(32);
const mensagemOriginal = "Dados confidenciais da avaliação - Professor Celso";

console.log("Mensagem original:", mensagemOriginal);

// 2. Cifragem
const cifrado = cifrar(mensagemOriginal, chaveSecreta);
console.log("\n--- Resultado da Cifragem ---");
console.log("IV (12 bytes hex):", cifrado.iv);
console.log("Ciphertext (hex):", cifrado.ciphertext);
console.log("Tag de Autenticação (16 bytes hex):", cifrado.authTag);

// 3. Decifragem normal com sucesso
const recuperado = decifrar(cifrado, chaveSecreta);
console.log("\n--- Decifragem com Sucesso ---");
console.log("Texto recuperado:", recuperado);

// 4. Teste de Adulteração: o que acontece se um invasor alterar 1 caractere do ciphertext?
console.log("\n--- Teste de Adulteração (Detecção de Ataque) ---");
const cifradoAdulterado = {
    ...cifrado,
    ciphertext: cifrado.ciphertext.substring(0, cifrado.ciphertext.length - 2) + "ff"
};

try {
    decifrar(cifradoAdulterado, chaveSecreta);
} catch (error) {
    console.log("ALERTA: Adulteração detectada com sucesso!");
    console.log("Erro disparado pelo AES-GCM:", error.message);
    console.log("A tag de autenticação rejeitou os dados modificados, preservando a integridade.");
}

module.exports = { cifrar, decifrar };
