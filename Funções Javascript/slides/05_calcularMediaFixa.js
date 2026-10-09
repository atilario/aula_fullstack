// Slide 08: Função sem parâmetros: cálculo interno

function calcularMediaFixa() {
    // Valores definidos dentro da própria função.
    const nota1 = 8;
    const nota2 = 6;
    const media = (nota1 + nota2) / 2;

    console.log('Média:', media);
}

calcularMediaFixa();

// Funciona, mas sempre calcula as mesmas notas. Parâmetros tornarão o código flexível.
