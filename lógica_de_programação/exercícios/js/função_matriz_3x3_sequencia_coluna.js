// Percorre a matrix e devolve os valores em coluna
function exibe() {
    var matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    for (let lin = 0; lin < 3; lin++)
        for (let col = 0; col < 3; col++)
            console.log(matriz[lin][col])
}
console.log(exibe())