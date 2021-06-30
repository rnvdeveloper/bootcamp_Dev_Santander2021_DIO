// Irá retornar um valor a ser executado de acordo com a escolha do usuário

var escolha = 0

switch (escolha) {
    // verifica se o número inserido é igual ao número do caso.
    case 0:
        console.log("Abrir os olhos.")
        break
    case 1:
        console.log("Pegar o celular.")
        break
    case 2:
        console.log("Desligar o despertador.")
        break
    case 3:
        console.log("Se espreguiçar.")
        break
    case 4:
        console.log("Levantar da cama.")
        break
    case 5:
        console.log("Ir até o banheiro sem tropeçar.")
        break
    case 6:
        console.log("Lavar o rosto.")
        break
    default:
        console.log("Pegar o celular, adiar o despertador e voltar a dormir.")
}