// Slide 25: Arrow function

// Forma tradicional
function quadrado(numero) {
    return numero * numero;
}

// Forma compacta com retorno implícito
const quadradoArrow = numero => numero * numero;

console.log(quadrado(5));      // 25
console.log(quadradoArrow(5)); // 25

// Arrow functions são frequentes em métodos de vetores e callbacks.
