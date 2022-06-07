const livro = require('./listaLivros');

let maisBarato = 0;

for (let atual = 0; atual < livro.length; atual++) {
  if(livro[atual].preco < livro[maisBarato].preco) {
      maisBarato = atual
    }
}
console.log(`o preco mais barato do livro é ${livro[maisBarato].preco} e o titulo é ${livro[maisBarato].titulo}`)