// Slide 37: Prática 6 — Hash Simples x HMAC
// Demonstração da falha do hash simples e a segurança do HMAC-SHA-256

const crypto = require("crypto");

// ==========================================
// 1. O CENÁRIO COM HASH SIMPLES (VULNERÁVEL)
// ==========================================
function gerarHashSimples(mensagem) {
    return crypto.createHash("sha256").update(mensagem, "utf8").digest("hex");
}

function demonstrarAtaqueHashSimples() {
    console.log("--- 1. Vulnerabilidade do Hash Simples ---");
    const mensagemOriginal = JSON.stringify({ valor: 100, matricula: "A109", horario: "10:00" });
    const hashOriginal = gerarHashSimples(mensagemOriginal);

    console.log("Origem enviou:", mensagemOriginal);
    console.log("Hash SHA-256: ", hashOriginal);

    // O ATACANTE intercepta e adultera:
    const mensagemAdulterada = JSON.stringify({ valor: 9000, matricula: "A109", horario: "10:00" });
    // Como o hash é público e determinístico, o atacante recalcula facilmente:
    const hashAdulterado = gerarHashSimples(mensagemAdulterada);

    console.log("\n[Ataque Man-in-the-Middle]");
    console.log("Mensagem fraudada:", mensagemAdulterada);
    console.log("Novo hash forjado: ", hashAdulterado);

    // O Destinatário verifica:
    const ehValido = gerarHashSimples(mensagemAdulterada) === hashAdulterado;
    console.log("Resultado no receptor: O hash confere? ->", ehValido ? "SIM (VULNERABILIDADE! Fraude aceita!)" : "NÃO");
}

// ==========================================
// 2. A SOLUÇÃO COM HMAC-SHA-256 (SEGURO)
// ==========================================
function gerarHMAC(mensagem, chaveSecreta) {
    return crypto.createHmac("sha256", chaveSecreta).update(mensagem, "utf8").digest("hex");
}

function verificarHMAC(mensagem, tagRecebida, chaveSecreta) {
    const tagCalculada = gerarHMAC(mensagem, chaveSecreta);
    // Comparação segura em tempo constante contra timing-attacks
    return crypto.timingSafeEqual(Buffer.from(tagCalculada, "hex"), Buffer.from(tagRecebida, "hex"));
}

function demonstrarSegurancaHMAC() {
    console.log("\n--- 2. Segurança do HMAC-SHA-256 com Chave Secreta ---");
    const chaveSecretaCompartilhada = crypto.randomBytes(32).toString("hex");

    const mensagemOriginal = JSON.stringify({ valor: 100, matricula: "A109", horario: "10:00" });
    const tagHMAC = gerarHMAC(mensagemOriginal, chaveSecretaCompartilhada);

    console.log("Mensagem legítima: ", mensagemOriginal);
    console.log("Tag HMAC-SHA-256:  ", tagHMAC);

    // Verificação normal:
    const verificacaoOk = verificarHMAC(mensagemOriginal, tagHMAC, chaveSecretaCompartilhada);
    console.log("Verificação inicial legítima: ->", verificacaoOk ? "✔ VÁLIDA (Origem e integridade confirmadas)" : "✖ INVÁLIDA");

    // TENTATIVA DE ATAQUE:
    // O atacante altera a mensagem, mas NÃO possui a chave secreta compartilhada
    console.log("\n[Tentativa de Fraude pelo Invasor]");
    const mensagemAdulterada = JSON.stringify({ valor: 9000, matricula: "A109", horario: "10:00" });

    // Tentativa 1: Invasor mantém a tag original
    try {
        const fraude1 = verificarHMAC(mensagemAdulterada, tagHMAC, chaveSecretaCompartilhada);
        console.log("Fraude com mesma tag:", fraude1 ? "Aceita" : "Rejeitada");
    } catch {
        console.log("Tentativa 1 (mesma tag): ✖ REJEITADA! A tag não corresponde aos dados.");
    }

    // Tentativa 2: Invasor tenta gerar uma tag com uma chave própria qualquer
    const chaveFalsa = crypto.randomBytes(32).toString("hex");
    const tagFalsa = gerarHMAC(mensagemAdulterada, chaveFalsa);
    const fraude2 = verificarHMAC(mensagemAdulterada, tagFalsa, chaveSecretaCompartilhada);
    console.log("Tentativa 2 (tag recalculada sem o segredo legítimo): ✖", fraude2 ? "Aceita" : "REJEITADA! Tag inválida.");
}

console.log("=== Prática 6: Hash Simples x HMAC (Slide 37) ===\n");
demonstrarAtaqueHashSimples();
demonstrarSegurancaHMAC();

module.exports = { gerarHashSimples, gerarHMAC, verificarHMAC };
