// Slide 32 - Desafio 1:
// Crie calcularIMC(peso, altura) com validação e classificação.

function calcularIMC(peso, altura) {
    // Validação de entrada
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        return 'Erro: informe valores válidos e maiores que zero para peso e altura.';
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'Obesidade grau I';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III (mórbida)';
    }

    return {
        imc: Number(imc.toFixed(2)),
        classificacao: classificacao
    };
}

// Exemplos de chamada:
console.log(calcularIMC(70, 1.75));
console.log(calcularIMC(50, 1.70));
console.log(calcularIMC(95, 1.72));
console.log(calcularIMC(-10, 1.70)); // Caso de validação
