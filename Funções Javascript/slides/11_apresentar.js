// Slide 16: Parâmetro padrão

// Se o segundo argumento não vier, perfil recebe 'Aluno'.
function apresentar(nome, perfil = 'Aluno') {
    console.log(`${nome} acessou como ${perfil}.`);
}

apresentar('João');
// João acessou como Aluno.

apresentar('Carla', 'Professora');
// Carla acessou como Professora.

// Valores padrão evitam undefined em argumentos opcionais.
