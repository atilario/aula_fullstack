// Slide 31 - Exercício 5:
// Crie converterCelsius(fahrenheit) e retorne a temperatura em Celsius.
// Fórmula: C = (F - 32) * 5/9

function converterCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return Number(celsius.toFixed(1));
}

// Exemplos de chamada e exibição:
console.log(`32°F em Celsius: ${converterCelsius(32)}°C`);   // 0°C
console.log(`77°F em Celsius: ${converterCelsius(77)}°C`);   // 25°C
console.log(`100°F em Celsius: ${converterCelsius(100)}°C`); // 37.8°C
