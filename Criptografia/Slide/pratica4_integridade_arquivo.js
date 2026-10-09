// Slide 35: Prática 4 — Integridade de arquivo com Web Crypto API e ArrayBuffer

const cryptoApi = (typeof window !== 'undefined' && window.crypto) 
    ? window.crypto 
    : globalThis.crypto;

// Calcula hash SHA-256 diretamente sobre um ArrayBuffer
async function calcularHashArrayBuffer(arrayBuffer) {
    const buffer = await cryptoApi.subtle.digest("SHA-256", arrayBuffer);
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// Em ambiente Node.js, pode ser testado com fs.readFileSync
if (typeof window === 'undefined') {
    const fs = require('fs');
    const path = require('path');

    (async () => {
        console.log("=== Prática 4: Integridade de Arquivo (Node.js demo) ===");
        // Testando com este próprio arquivo
        const filePath = __filename;
        const fileBuffer = fs.readFileSync(filePath);
        const arrayBuf = fileBuffer.buffer.slice(fileBuffer.byteOffset, fileBuffer.byteOffset + fileBuffer.byteLength);
        const hash = await calcularHashArrayBuffer(arrayBuf);

        console.log("Arquivo:", path.basename(filePath));
        console.log("Tamanho:", fileBuffer.length, "bytes");
        console.log("Hash SHA-256:", hash);
    })();
}

if (typeof module !== 'undefined') {
    module.exports = { calcularHashArrayBuffer };
}
