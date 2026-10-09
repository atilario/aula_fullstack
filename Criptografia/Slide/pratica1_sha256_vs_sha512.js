// Slide 31 e 32: Prática 1 — Comparando SHA-256 e SHA-512 com Web Crypto API

const cryptoApi = (typeof window !== 'undefined' && window.crypto) 
    ? window.crypto 
    : globalThis.crypto;

// Função genérica fornecida no slide 32
async function gerarHash(texto, algoritmo) {
    const dados = new TextEncoder().encode(texto);
    const buffer = await cryptoApi.subtle.digest(algoritmo, dados);
    return Array.from(new Uint8Array(buffer))
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}

// Bateria de testes solicitados no slide 31
async function executarBateriaPratica1() {
    const entradas = [
        "Professor Celso",
        "professor Celso",
        "Professor Celso!",
        "" // string vazia
    ];

    const resultados = [];

    for (const entrada of entradas) {
        // SHA-256
        const hash256 = await gerarHash(entrada, "SHA-256");
        resultados.push({
            entrada: entrada === "" ? "(string vazia)" : entrada,
            algoritmo: "SHA-256",
            bits: 256,
            caracteresHex: hash256.length,
            hash: hash256
        });

        // SHA-512
        const hash512 = await gerarHash(entrada, "SHA-512");
        resultados.push({
            entrada: entrada === "" ? "(string vazia)" : entrada,
            algoritmo: "SHA-512",
            bits: 512,
            caracteresHex: hash512.length,
            hash: hash512
        });
    }

    return resultados;
}

// Execução em ambiente Node.js
if (typeof window === 'undefined') {
    (async () => {
        console.log("=== Prática 1: Comparativo SHA-256 vs SHA-512 ===\n");
        const registros = await executarBateriaPratica1();
        console.table(registros);
    })();
}

if (typeof module !== 'undefined') {
    module.exports = { gerarHash, executarBateriaPratica1 };
}
