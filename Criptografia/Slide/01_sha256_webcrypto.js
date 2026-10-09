// Slide 21: JavaScript — exemplo de SHA-256 usando Web Crypto API
// Suporta execução no Navegador e no Node.js moderno (v16+)

// Compatibilidade Node.js / Navegador:
const cryptoApi = (typeof window !== 'undefined' && window.crypto) 
    ? window.crypto 
    : globalThis.crypto;

async function sha256(texto) {
    const bytes = new TextEncoder().encode(texto);
    const buffer = await cryptoApi.subtle.digest("SHA-256", bytes);

    return [...new Uint8Array(buffer)]
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// Teste do slide
sha256("Professor Celso")
    .then(hash => {
        console.log("Entrada: 'Professor Celso'");
        console.log("Hash SHA-256:", hash);
        console.log("Comprimento (caracteres hex):", hash.length); // 64 caracteres = 256 bits
    })
    .catch(console.error);

if (typeof module !== 'undefined') {
    module.exports = { sha256 };
}
