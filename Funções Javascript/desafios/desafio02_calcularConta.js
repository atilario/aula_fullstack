// Slide 32 - Desafio 2:
// Crie calcularConta(consumo, tarifa) e devolva o valor formatado.

function calcularConta(consumo, tarifa) {
    if (consumo < 0 || tarifa < 0) {
        return 'Erro: valores de consumo e tarifa não podem ser negativos.';
    }

    const total = consumo * tarifa;

    // Retorna o valor formatado em padrão monetário brasileiro (R$ 0,00)
    return total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Exemplos de chamada:
console.log('Conta de luz (150 kWh a R$ 0.75):', calcularConta(150, 0.75));
console.log('Conta de água (30 m³ a R$ 4.20):', calcularConta(30, 4.20));
