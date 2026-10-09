// Slide 31 - Exercício 4:
// Crie verificarAprovacao(media) e retorne “Aprovado” ou “Reprovado”.

function verificarAprovacao(media) {
    if (media >= 7) {
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}

// Exemplos de chamada e exibição:
console.log(`Média 8.5: ${verificarAprovacao(8.5)}`); // Aprovado
console.log(`Média 7.0: ${verificarAprovacao(7.0)}`); // Aprovado
console.log(`Média 5.8: ${verificarAprovacao(5.8)}`); // Reprovado
