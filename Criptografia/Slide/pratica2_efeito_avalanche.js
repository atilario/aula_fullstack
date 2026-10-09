// Slide 33: Prática 2 — Investigando o efeito avalanche
// Compara 'SEGURANCA2026' e 'SEGURANCA2027' em nível de caracteres e bits

const cryptoApi = (typeof window !== 'undefined' && window.crypto) 
    ? window.crypto 
    : globalThis.crypto;

async function calcularSHA256(texto) {
    const dados = new TextEncoder().encode(texto);
    const buffer = await cryptoApi.subtle.digest("SHA-256", dados);
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// Converte string hexadecimal para string binária de 256 bits
function hexParaBinario(hex) {
    return hex
        .split("")
        .map(h => parseInt(h, 16).toString(2).padStart(4, "0"))
        .join("");
}

// Análise completa do efeito avalanche
async function analisarEfeitoAvalanche(entradaA = "SEGURANCA2026", entradaB = "SEGURANCA2027") {
    const hashA = await calcularSHA256(entradaA);
    const hashB = await calcularSHA256(entradaB);

    const binA = hexParaBinario(hashA);
    const binB = hexParaBinario(hashB);

    // Comparação de caracteres hexadecimais
    let caracteresIguais = 0;
    let caracteresDiferentes = 0;
    for (let i = 0; i < hashA.length; i++) {
        if (hashA[i] === hashB[i]) {
            caracteresIguais++;
        } else {
            caracteresDiferentes++;
        }
    }

    // Comparação bit a bit (256 bits)
    let bitsDiferentes = 0;
    const mapaDiferencas = [];

    for (let i = 0; i < binA.length; i++) {
        const diferente = binA[i] !== binB[i];
        if (diferente) bitsDiferentes++;
        mapaDiferencas.push(diferente);
    }

    const porcentagemBitsDiferentes = ((bitsDiferentes / binA.length) * 100).toFixed(2);

    return {
        entradaA,
        entradaB,
        hashA,
        hashB,
        binA,
        binB,
        caracteresDiferentes,
        caracteresIguais,
        totalBits: binA.length,
        bitsDiferentes,
        bitsIguais: binA.length - bitsDiferentes,
        porcentagemBitsDiferentes: `${porcentagemBitsDiferentes}%`,
        conclusao: "Uma alteração de apenas 1 bit na entrada causou uma variação drástica (~50%) no resumo, confirmando a propriedade de dispersão e o efeito avalanche do SHA-256."
    };
}

if (typeof window === 'undefined') {
    (async () => {
        console.log("=== Prática 2: Investigação do Efeito Avalanche (Slide 33) ===\n");
        const relatorio = await analisarEfeitoAvalanche();
        console.log("Entrada A:", relatorio.entradaA);
        console.log("Hash A:   ", relatorio.hashA);
        console.log("\nEntrada B:", relatorio.entradaB);
        console.log("Hash B:   ", relatorio.hashB);
        console.log("\n--- Análise de Caracteres Hexadecimais (Total: 64) ---");
        console.log(`Caracteres diferentes: ${relatorio.caracteresDiferentes} de 64`);
        console.log(`Caracteres coincidentes: ${relatorio.caracteresIguais} de 64`);
        console.log("\n--- Desafio: Análise Bit a Bit (Total: 256 bits) ---");
        console.log(`Bits divergentes: ${relatorio.bitsDiferentes} de ${relatorio.totalBits}`);
        console.log(`Porcentagem de bits diferentes: ${relatorio.porcentagemBitsDiferentes}`);
        console.log("\nConclusão:", relatorio.conclusao);
    })();
}

if (typeof module !== 'undefined') {
    module.exports = { analisarEfeitoAvalanche, hexParaBinario };
}
