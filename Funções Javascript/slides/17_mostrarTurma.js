// Slide 23: Escopo local e global

const escola = 'SENAI CIMATEC'; // escopo global

function mostrarTurma(nomeTurma) {
    const mensagem = `${escola}: ${nomeTurma}`; // variável local
    console.log(mensagem);
}

mostrarTurma('Desenvolvimento Web');

// console.log(mensagem);
// Erro: mensagem só existe dentro da função.

// Parâmetros e variáveis declaradas na função possuem escopo local.
