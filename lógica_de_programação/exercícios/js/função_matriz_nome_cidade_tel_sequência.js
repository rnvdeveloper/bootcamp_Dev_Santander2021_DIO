// Esse código retorna os sequencialmente em coluna
function exFinal() {
    let dados = [
        ["João", "São Paulo", "(11) 9999-5241"],
        ["Maria", "Ribeirão Preto", "(16) 9999-8596"],
        ["Ana", "Manaus", "(92) 9999-8574"]
    ]
    // var resultado = `Nome: ${dados[lin][col]}`
    for (let lin = 0; lin < dados.length; lin++)
        for (let col = 0; col < dados.length; col++)
            console.log(dados[lin][col])
}
console.log(exFinal())