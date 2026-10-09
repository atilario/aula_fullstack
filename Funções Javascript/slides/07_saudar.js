// Slide 11: Parâmetros tornam a função reutilizável

// nome é o parâmetro: uma variável local da função.
function saudar(nome) {
    console.log(`Olá, ${nome}!`);
}

// 'Ana' e 'Carlos' são argumentos enviados nas chamadas.
saudar('Ana');
saudar('Carlos');
saudar('Marina');

// A mesma função produz resultados diferentes conforme o argumento.
