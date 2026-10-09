// Slide 22: Node.js — SHA-256 usando módulo nativo 'crypto'
const crypto = require("crypto");

function gerarHash(texto) {
    return crypto
        .createHash("sha256")
        .update(texto, "utf8")
        .digest("hex");
}

console.log("Entrada: 'Professor Celso'");
const hash = gerarHash("Professor Celso");
console.log("Hash SHA-256 (Node.js):", hash);
console.log("Comprimento:", hash.length, "caracteres hexadecimais (256 bits)");

// Observação do slide:
// Este exemplo gera hash; não cifra o texto e não permite recuperar a entrada.

module.exports = { gerarHash };
