import leia from 'readline-sync'

const numeros: Set<number> = new Set<number>()

while (numeros.size < 10) {
    const entrada = leia.questionInt(`Digite o ${numeros.size + 1} numero inteiro (nao repetido): `)

    if (numeros.has(entrada)) {
        console.log("Numero repetido! Digite um numero diferente.")
    } else {
        numeros.add(entrada)
    }
}


const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b)

console.log("\nListar dados do Set:")
numerosOrdenados.forEach(numero => console.log(numero))