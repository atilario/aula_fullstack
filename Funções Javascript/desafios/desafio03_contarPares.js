// Slide 32 - Desafio 3:
// Crie contarPares(numeros) e retorne a quantidade de valores pares.

function contarPares(numeros) {
    if (!Array.isArray(numeros)) {
        return 'Erro: o argumento deve ser um vetor (array).';
    }

    let pares = 0;
    for (const numero of numeros) {
        if (numero % 2 === 0) {
            pares++;
        }
    }
    return pares;
}

// Exemplos de chamada:
console.log('Pares em [1, 2, 3, 4, 5, 6]:', contarPares([1, 2, 3, 4, 5, 6]));       // 3 (2, 4, 6)
console.log('Pares em [10, 15, 22, 33, 44]:', contarPares([10, 15, 22, 33, 44])); // 3 (10, 22, 44)
console.log('Pares em [1, 3, 5, 7, 9]:', contarPares([1, 3, 5, 7, 9]));             // 0
