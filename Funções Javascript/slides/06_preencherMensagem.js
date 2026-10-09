// Slide 09: Função sem parâmetros: manipular a página

// HTML esperado: <p id="mensagem"></p>
function preencherMensagem() {
    const paragrafo = document.getElementById('mensagem');
    if (paragrafo) {
        paragrafo.textContent = 'JavaScript alterou este texto!';
    } else {
        console.log('Elemento #mensagem não encontrado no DOM.');
    }
}

// Se estiver no navegador, executa a função:
if (typeof document !== 'undefined') {
    preencherMensagem();
}

// A verificação evita erro quando o elemento não existe.
