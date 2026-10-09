// Slide 22: Função com vetor como parâmetro

function calcularTotal(valores) {
    let total = 0;
    for (const valor of valores) {
        total += valor;
    }
    return total;
}

console.log(calcularTotal([10, 20, 30])); // 60
console.log(calcularTotal([5.5, 4.5]));   // 10

// O parâmetro recebe o vetor inteiro. A função percorre seus elementos.
