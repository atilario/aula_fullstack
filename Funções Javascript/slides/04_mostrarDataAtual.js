// Slide 07: Função sem parâmetros: mostrar data

function mostrarDataAtual() {
    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString('pt-BR');
    console.log('Data de hoje:', dataFormatada);
}

mostrarDataAtual();

// A função obtém a informação diretamente do ambiente.
