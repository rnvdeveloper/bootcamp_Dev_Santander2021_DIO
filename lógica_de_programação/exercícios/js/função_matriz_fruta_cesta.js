//Exercícios durante o curso

// função frutas retorna um indice
var frutas = Array(4)
frutas[0] = "Maça"
frutas[1] = "Pera"
frutas[2] = "Uva"
frutas[4] = "Melão"
console.log(frutas[2])


// função cesta retorna dois valores
function cesta() {
    let cesta = [
        ["Maça", "100"],
        ["Pera", "200"],
        ["Uva", "300"],
        ["Melão", "400"]
    ]
    let resultado = `Fruta = ${cesta[2][0]}, Quantidade = ${cesta[2][1]}`
    console.log(resultado)
}
console.log(cesta())