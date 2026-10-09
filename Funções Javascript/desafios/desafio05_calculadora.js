// Slide 32 - Desafio 5:
// Crie uma página que leia dois números e escolha a operação por parâmetro.
// Função de cálculo por parâmetro:

function calcular(n1, n2, operacao) {
    switch (operacao) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            if (n2 === 0) {
                return 'Erro: Não é possível dividir por zero.';
            }
            return n1 / n2;
        default:
            return 'Erro: Operação inválida.';
    }
}

// Exemplos de chamada no console / Node:
console.log('10 + 5 =', calcular(10, 5, '+'));
console.log('10 - 5 =', calcular(10, 5, '-'));
console.log('10 * 5 =', calcular(10, 5, '*'));
console.log('10 / 5 =', calcular(10, 5, '/'));
console.log('10 / 0 =', calcular(10, 0, '/'));
