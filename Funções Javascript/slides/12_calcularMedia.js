// Slide 17: Retorno entrega um resultado

function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    return media; // encerra a função e devolve o valor
}

const mediaAna = calcularMedia(8, 7);
console.log(mediaAna); // 7.5

const mediaBia = calcularMedia(10, 9);
console.log(mediaBia); // 9.5

// return permite guardar, comparar ou reutilizar o resultado.
