// Slide 13: Um parâmetro: dobro de um número

function mostrarDobro(numero) {
    const dobro = numero * 2;
    console.log(`O dobro de ${numero} é ${dobro}.`);
}

mostrarDobro(5);  // O dobro de 5 é 10.
mostrarDobro(12); // O dobro de 12 é 24.
mostrarDobro(-3); // O dobro de -3 é -6.

// O parâmetro numero recebe um valor diferente em cada chamada.
