// Slide 20: Retorno antecipado e validação

function dividir(dividendo, divisor) {
    if (divisor === 0) {
        return 'Não é possível dividir por zero.';
    }
    return dividendo / divisor;
}

console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // mensagem de erro

// O primeiro return encerra a função quando encontra um divisor inválido.
