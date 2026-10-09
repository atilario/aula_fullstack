// Slide 32 - Desafio 4:
// Crie cadastrarAluno(nome, curso, notas) e retorne um objeto com média.

function cadastrarAluno(nome, curso, notas) {
    if (!Array.isArray(notas) || notas.length === 0) {
        return 'Erro: informe uma lista de notas válida com ao menos uma nota.';
    }

    const soma = notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0);
    const media = soma / notas.length;

    return {
        nome: nome,
        curso: curso,
        notas: notas,
        media: Number(media.toFixed(2)),
        situacao: media >= 7 ? 'Aprovado' : 'Reprovado'
    };
}

// Exemplos de chamada:
const aluno1 = cadastrarAluno('Lia Silva', 'Engenharia de Software', [8.5, 7.0, 9.0]);
console.log(aluno1);

const aluno2 = cadastrarAluno('Ravi Santos', 'Ciência da Computação', [6.0, 5.5, 7.0]);
console.log(aluno2);
