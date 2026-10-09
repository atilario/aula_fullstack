// Slide 27: Formulário: nome e mensagem
// A função sem parâmetro lê a página. A função com parâmetro produz a mensagem.

function criarMensagem(nome) {
    return `Olá, ${nome}! Bons estudos.`;
}

function cumprimentar() {
    if (typeof document !== 'undefined') {
        const nome = document.getElementById('nome').value.trim();
        const saida = document.getElementById('saida');
        saida.textContent = nome ? criarMensagem(nome) : 'Informe o nome.';
    } else {
        console.log(criarMensagem('Visitante'));
    }
}
