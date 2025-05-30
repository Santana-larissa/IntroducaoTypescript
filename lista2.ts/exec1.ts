import leia from 'readline-sync'

// Classe Queue (Fila)
class Queue<T> {
    private items: T[] = []

    // Adiciona um item ao final da fila
    enqueue(item: T): void {
        this.items.push(item)
    }

    // Remove o item do início da fila
    dequeue(): T | undefined {
        return this.items.shift()
    }

    // Lista todos os itens da fila
    list(): void {
        if (this.items.length === 0) {
            console.log("A fila esta vazia.")
        } else {
            console.log("\nClientes na fila:")
            this.items.forEach((item, index) => {
                console.log(`${index + 1}º - ${item}`)
            })
        }
    }

    // Verifica se a fila está vazia
    isEmpty(): boolean {
        return this.items.length === 0
    }
}

// Cria uma fila de strings (nomes de clientes)
const filaClientes = new Queue<string>()

let opcao: number

do {
    console.log("\nMenu:")
    console.log("1 - Adicionar cliente na fila")
    console.log("2 - Listar clientes na fila")
    console.log("3 - Chamar cliente")
    console.log("0 - Sair")

    opcao = leia.questionInt("Digite uma opcao: ")

    switch (opcao) {
        case 1:
            const nome = leia.question("Digite o nome do cliente: ")
            filaClientes.enqueue(nome)
            console.log(`Cliente "${nome}" adicionado a fila.`)
            break
        case 2:
            filaClientes.list()
            break
        case 3:
            if (filaClientes.isEmpty()) {
                console.log("A fila esta vazia. Nenhum cliente para chamar.")
            } else {
                const clienteChamado = filaClientes.dequeue()
                console.log(`Cliente chamado: ${clienteChamado}`)
            }
            break
        case 0:
            console.log("Programa encerrado.")
            break
        default:
            console.log("Opcao invalida. Tente novamente.")
            break
    }
} while (opcao !== 0)