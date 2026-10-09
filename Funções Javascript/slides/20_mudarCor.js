// Slide 26: Exemplo com botão e parâmetro (mudarCor)

function mudarCor(cor) {
    // O argumento define a nova cor da página.
    if (typeof document !== 'undefined') {
        document.body.style.backgroundColor = cor;
    } else {
        console.log(`Cor alterada para: ${cor}`);
    }
}

// Cada botão reutiliza a mesma função e envia uma cor diferente.
