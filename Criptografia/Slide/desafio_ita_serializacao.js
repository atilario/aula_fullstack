// Slide 39: Desafio ITA — Representação Não Ambígua antes do SHA
const crypto = require("crypto");

function sha256(str) {
    return crypto.createHash("sha256").update(str, "utf8").digest("hex");
}

console.log("=== DESAFIO ITA: SERIALIZAÇÃO E AMBIGUIDADE (Slide 39) ===\n");

// 1. O PROBLEMA (Concatenação Insegura e Ambígua)
const registroA = { campo1: "12", campo2: "345" };
const registroB = { campo1: "123", campo2: "45" };

const concatenacaoA = registroA.campo1 + registroA.campo2; // "12345"
const concatenacaoB = registroB.campo1 + registroB.campo2; // "12345"

const hashA_inseguro = sha256(concatenacaoA);
const hashB_inseguro = sha256(concatenacaoB);

console.log("--- 1. Concatenação Simples (Vulnerável) ---");
console.log(`Registro A: campo1="${registroA.campo1}", campo2="${registroA.campo2}" -> Bytes: "${concatenacaoA}"`);
console.log(`Registro B: campo1="${registroB.campo1}", campo2="${registroB.campo2}" -> Bytes: "${concatenacaoB}"`);
console.log("Hash A:", hashA_inseguro);
console.log("Hash B:", hashB_inseguro);
console.log("Os hashes são iguais?", hashA_inseguro === hashB_inseguro ? "SIM" : "NÃO");

console.log("\n⚠️ EXPLICAÇÃO TÉCNICA: Por que isso NÃO é uma colisão do SHA-256?");
console.log("Uma colisão matemática ocorre quando duas entradas distintas X ≠ Y geram H(X) = H(Y).");
console.log("Neste caso, a entrada fornecida ao SHA-256 foi idêntica: X = '12345' e Y = '12345'.");
console.log("O erro ocorreu na CAMADA DE APLICAÇÃO (falha de serialização/framing), e não no algoritmo criptográfico.\n");

// 2. PROPOSTA DE SERIALIZAÇÃO CANÔNICA NÃO AMBÍGUA
// Abordagem 1: Prefixação de Comprimento (Length-Prefix / TLV)
function serializarLengthPrefixed(campo1, campo2) {
    // Formato: len(c1):c1|len(c2):c2
    return `${campo1.length}:${campo1}|${campo2.length}:${campo2}`;
}

// Abordagem 2: Estrutura JSON Canônica (RFC 8785)
function serializarJsonCanonico(obj) {
    // Ordena chaves estritamente
    const chavesOrdenadas = Object.keys(obj).sort();
    const canonicObj = {};
    for (const k of chavesOrdenadas) {
        canonicObj[k] = obj[k];
    }
    return JSON.stringify(canonicObj);
}

console.log("--- 2. Implementação com Serialização Canônica Não Ambígua ---");

// Testando com Length-Prefixed:
const entradaCanonicaA = serializarLengthPrefixed(registroA.campo1, registroA.campo2);
const entradaCanonicaB = serializarLengthPrefixed(registroB.campo1, registroB.campo2);

const hashCanonicaA = sha256(entradaCanonicaA);
const hashCanonicaB = sha256(entradaCanonicaB);

console.log(`Registro A Canônico: "${entradaCanonicaA}"`);
console.log(`Registro B Canônico: "${entradaCanonicaB}"`);
console.log("Hash Canônico A:", hashCanonicaA);
console.log("Hash Canônico B:", hashCanonicaB);
console.log("Os hashes agora são distintos?", hashCanonicaA !== hashCanonicaB ? "SIM! (Ambiguidade resolvida com sucesso)" : "NÃO");

// Testando com JSON Canônico:
const jsonA = serializarJsonCanonico(registroA);
const jsonB = serializarJsonCanonico(registroB);
console.log(`\nFormato JSON Canônico A: ${jsonA} -> Hash: ${sha256(jsonA)}`);
console.log(`Formato JSON Canônico B: ${jsonB} -> Hash: ${sha256(jsonB)}`);

module.exports = { serializarLengthPrefixed, serializarJsonCanonico };
