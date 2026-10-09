// Slide 25: Prática Guiada — Funções de SHA-256 e Comparação

async function calcularSHA256(texto) {
    const encoder = new TextEncoder();
    const dados = encoder.encode(texto);
    const buffer = await crypto.subtle.digest("SHA-256", dados);
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// Compara dois textos e retorna se seus hashes são idênticos
async function compararHashes(texto1, texto2) {
    const hash1 = await calcularSHA256(texto1);
    const hash2 = await calcularSHA256(texto2);
    return {
        hash1,
        hash2,
        saoIguais: hash1 === hash2
    };
}

// Bateria de testes solicitados no slide 25:
async function executarTestesPredefinidos() {
    const entradas = ["Celso", "celso", "Celso1", "Celso2"];
    const resultados = [];

    for (const entrada of entradas) {
        const hash = await calcularSHA256(entrada);
        resultados.push({
            entrada,
            hash,
            tamanhoHex: hash.length,
            tamanhoBits: 256
        });
    }
    return resultados;
}

// Se rodando no Node.js:
if (typeof window === 'undefined') {
    (async () => {
        console.log("=== Bateria de Testes (Slide 25) ===");
        const testes = await executarTestesPredefinidos();
        console.table(testes);

        console.log("\n=== Teste de Dois Inputs ===");
        const comp1 = await compararHashes("Celso", "Celso");
        console.log("'Celso' vs 'Celso': Hashes iguais?", comp1.saoIguais);

        const comp2 = await compararHashes("Celso", "celso");
        console.log("'Celso' vs 'celso': Hashes iguais?", comp2.saoIguais);
    })();
}
