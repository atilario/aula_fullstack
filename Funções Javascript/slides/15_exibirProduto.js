// Slide 21: Função com objeto como parâmetro

function exibirProduto(produto) {
    console.log(`Produto: ${produto.nome}`);
    console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
}

const livro = { nome: 'JavaScript Básico', preco: 59.9 };
const teclado = { nome: 'Teclado USB', preco: 120 };

exibirProduto(livro);
exibirProduto(teclado);

// Objetos deixam clara a relação entre cada valor e seu significado.
