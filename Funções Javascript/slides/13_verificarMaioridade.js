// Slide 19: Retorno booleano: maioridade

function verificarMaioridade(idade) {
    return idade >= 18;
}

const podeEntrar = verificarMaioridade(20);

if (podeEntrar) {
    console.log('Entrada permitida.');
} else {
    console.log('Entrada não permitida.');
}

// Uma função pode retornar number, string, boolean, objeto, vetor ou outro valor.
