// Slide 30: Exemplo integrado: desconto
// O exemplo combina parâmetros, valor padrão, validação, cálculo e retorno.

function calcularDesconto(preco, percentual = 10) {
    if (preco < 0 || percentual < 0 || percentual > 100) {
        return null; // dados inválidos
    }

    const desconto = preco * (percentual / 100);
    return preco - desconto;
}

const valorFinal = calcularDesconto(200, 15);

if (valorFinal !== null) {
    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
} else {
    console.log('Dados inválidos.');
}
