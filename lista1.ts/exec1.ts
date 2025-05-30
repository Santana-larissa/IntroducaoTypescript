// vou precisar do array<string>
//pedir para o usuario digitar (readline) - repetição 5x
//mostrar a lista inteira
// ordenar alfabetixo e mostrar

import leia from 'readline-sync'

const lista: Array<string> = new Array<string>

for(let contador = 0; contador < 5; contador++) {
    lista.push(leia.question('Digita uma cor: '))
}

console.log(lista);

for(let cor of lista) {
    console.log(cor);
}
console.log(lista.sort());

for(let cor of lista) {
    console.log(cor);
}