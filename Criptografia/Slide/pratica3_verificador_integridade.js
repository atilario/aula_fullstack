// Slide 34: Prática 3 — Verificador de integridade e medição de bytes UTF-8

const cryptoApi = (typeof window !== 'undefined' && window.crypto) 
    ? window.crypto 
    : globalThis.crypto;

// Calcula hash SHA-256 e tamanho exato em bytes UTF-8
async function processarEntrada(texto) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(texto);
    const buffer = await cryptoApi.subtle.digest("SHA-256", bytes);

    const hash = Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");

    return {
        texto,
        quantidadeBytes: bytes.length, // Desafio do slide 34: número de bytes antes do hash
        quantidadeCaracteres: texto.length,
        hash
    };
}

// Verifica integridade entre conteúdo original e recebido
async function verificarIntegridade(conteudoOriginal, conteudoRecebido) {
    const original = await processarEntrada(conteudoOriginal);
    const recebido = await processarEntrada(conteudoRecebido);

    const integridadeConfirmada = original.hash === recebido.hash;

    return {
        original,
        recebido,
        status: integridadeConfirmada ? "INTEGRIDADE CONFIRMADA" : "CONTEÚDO ALTERADO",
        ehValido: integridadeConfirmada
    };
}

// Bateria de testes de cenários comuns citados no slide 34
async function executarCenariosSlide34() {
    const cenarios = [
        {
            nome: "Espaços extras",
            original: "Contrato assinado",
            recebido: "Contrato assinado "
        },
        {
            nome: "Maiúsculas / Minúsculas",
            original: "Engenharia",
            recebido: "engenharia"
        },
        {
            nome: "Acentuação (UTF-8 bytes)",
            original: "computacao",
            recebido: "computação"
        },
        {
            nome: "Quebra de linha (LF vs CRLF)",
            original: "Linha 1\nLinha 2",
            recebido: "Linha 1\r\nLinha 2"
        }
    ];

    const resultados = [];
    for (const c of cenarios) {
        const res = await verificarIntegridade(c.original, c.recebido);
        resultados.push({
            cenario: c.nome,
            bytesOriginal: res.original.quantidadeBytes,
            bytesRecebido: res.recebido.quantidadeBytes,
            status: res.status
        });
    }
    return resultados;
}

if (typeof window === 'undefined') {
    (async () => {
        console.log("=== Prática 3: Verificador de Integridade (Slide 34) ===\n");
        const tabela = await executarCenariosSlide34();
        console.table(tabela);
    })();
}

if (typeof module !== 'undefined') {
    module.exports = { processarEntrada, verificarIntegridade, executarCenariosSlide34 };
}
