import leia from 'readline-sync'

let pilhaLivros: string[] = []

let opcao = -1

while (opcao !== 0) {
console.log("\n--- MENU ---")
console.log("1 - Adicionar livro na pilha")
console.log("2 - Listar livros da pilha")
console.log("3 - Retirar livro da pilha")
console.log("0 - Sair")

opcao = leia.questionInt("Escolha uma opcao: ")

if (opcao === 1) {
    const livro = leia.question("Digite o nome do livro: ")
    pilhaLivros.push(livro)
    console.log(`Livro "${livro}" foi adicionado a pilha.`)

} else if (opcao === 2) {
    if (pilhaLivros.length === 0) {
    console.log("A pilha esta vazia.")
    } else {
    console.log("\nLivros na pilha:")
    for (let i = pilhaLivros.length - 1; i >= 0; i--) {
        console.log(`- ${pilhaLivros[i]}`)
    }
    }

} else if (opcao === 3) {
    if (pilhaLivros.length === 0) {
    console.log("A pilha esta vazia. Nao ha livro para retirar.")
    } else {
    const livroRemovido = pilhaLivros.pop()
    console.log(`Livro removido: ${livroRemovido}`)
    }

} else if (opcao === 0) {
    console.log("Programa encerrado.")

} else {
    console.log("Opcao invalida. Tente novamente.")

}
}