// Cripto_Lab - Roteiro Aula Laboratório SHA-256
// Implementação baseada no roteiro de 10 etapas da aula

const entrada = document.getElementById("entrada");
const original = document.getElementById("original");
const hash = document.getElementById("hash");
const contador = document.getElementById("contador");
const statusMsg = document.getElementById("status");

// Etapa 5: Conversão de ArrayBuffer para Hexadecimal (64 caracteres)
function bufferParaHex(buffer) {
    const bytes = new Uint8Array(buffer);
    return Array.from(bytes)
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}

// Etapa 3 e 4: Conversão para bytes UTF-8 e Geração com Web Crypto API
async function textoParaHash(texto) {
    const encoder = new TextEncoder();
    const dados = encoder.encode(texto);
    const resultado = await crypto.subtle.digest("SHA-256", dados);
    return bufferParaHex(resultado);
}

// Atualização dinâmica do contador de caracteres
function atualizarContador() {
    contador.textContent = `${entrada.value.length} caracteres`;
}

// Exibição de mensagens de feedback de status
function mostrarStatus(mensagem, tipo = "") {
    statusMsg.textContent = mensagem;
    statusMsg.className = "status-msg " + tipo;
}

// Etapa 4: Geração do hash com validação e tratamento de erro
async function gerarHash() {
    const texto = entrada.value;
    if (!texto.trim()) {
        mostrarStatus("Digite uma informação antes de gerar o hash.", "erro");
        entrada.focus();
        return;
    }

    try {
        const resultado = await textoParaHash(texto);
        original.textContent = texto;
        hash.textContent = resultado;
        mostrarStatus("Hash SHA-256 gerado com sucesso (64 caracteres hex).", "sucesso");
    } catch (erro) {
        mostrarStatus("Não foi possível gerar o hash neste navegador.", "erro");
    }
}

// Limpeza dos campos
function limparLaboratorio() {
    entrada.value = "";
    original.textContent = "—";
    hash.textContent = "—";
    atualizarContador();
    mostrarStatus("");
    entrada.focus();
}

// Cópia para a área de transferência com feedback
async function copiarHash() {
    if (hash.textContent === "—") {
        mostrarStatus("Gere um hash antes de copiar.", "erro");
        return;
    }

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(hash.textContent);
            mostrarStatus("Hash copiado para a área de transferência!", "sucesso");
        } else {
            // Fallback para contextos não-HTTPS
            const aux = document.createElement("textarea");
            aux.value = hash.textContent;
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);
            mostrarStatus("Hash copiado!", "sucesso");
        }
    } catch {
        mostrarStatus("Selecione o hash manualmente para copiar.", "erro");
    }
}

// Etapa 7: Comparação de dois dados
async function compararDados() {
    const um = document.getElementById("dado1").value;
    const dois = document.getElementById("dado2").value;
    const saida = document.getElementById("resultado-comparacao");
    const statusComp = document.getElementById("status-comparacao");

    if (!um || !dois) {
        saida.textContent = "PREENCHA OS DOIS CAMPOS";
        saida.className = "comparison-banner";
        statusComp.textContent = "A comparação exige dois valores não vazios.";
        statusComp.className = "status-msg erro";
        return;
    }

    try {
        const hashUm = await textoParaHash(um);
        const hashDois = await textoParaHash(dois);
        const saoIguais = hashUm === hashDois;

        if (saoIguais) {
            saida.textContent = "✔ HASHES IGUAIS (CONTEÚDO ÍNTEGRO)";
            saida.className = "comparison-banner iguais";
            statusComp.textContent = "Os dois dados geraram exatamente a mesma impressão digital.";
            statusComp.className = "status-msg sucesso";
        } else {
            saida.textContent = "✖ HASHES DIFERENTES (DADOS ALTERADOS)";
            saida.className = "comparison-banner diferentes";
            statusComp.textContent = "Os dois dados possuem impressões digitais distintas (ao menos 1 bit diferente).";
            statusComp.className = "status-msg erro";
        }
    } catch {
        saida.textContent = "ERRO NA COMPARAÇÃO";
        saida.className = "comparison-banner";
        statusComp.textContent = "Falha ao processar comparação.";
        statusComp.className = "status-msg erro";
    }
}

// Etapa 6: Tabela de Experimentos
async function preencherExperimento(valor) {
    const safeId = "hash-" + valor.replaceAll(" ", "-");
    const outputElem = document.getElementById(safeId);
    if (outputElem) {
        const h = await textoParaHash(valor);
        outputElem.textContent = h;
    }
}

async function calcularTodosExperimentos() {
    const entradas = ["Celso", "celso", "Celso1", "Celso2", "Professor", "Professor Celso"];
    for (const item of entradas) {
        await preencherExperimento(item);
    }
}

// Listeners
entrada.addEventListener("input", atualizarContador);
document.getElementById("gerar").addEventListener("click", gerarHash);
document.getElementById("limpar").addEventListener("click", limparLaboratorio);
document.getElementById("copiar").addEventListener("click", copiarHash);
document.getElementById("comparar").addEventListener("click", compararDados);
document.getElementById("calcular-todos-experimentos").addEventListener("click", calcularTodosExperimentos);

// Atalhos dos Chips
document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
        entrada.value = chip.dataset.ex;
        atualizarContador();
        gerarHash();
    });
});

// Botões individuais da tabela
document.querySelectorAll("[data-teste]").forEach(btn => {
    btn.addEventListener("click", () => {
        preencherExperimento(btn.dataset.teste);
    });
});

// Inicialização
atualizarContador();
