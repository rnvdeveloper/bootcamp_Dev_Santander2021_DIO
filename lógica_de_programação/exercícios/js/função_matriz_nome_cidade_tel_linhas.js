// Esse código retorna os dados alinhados da maneira esperada, gerando 3 linhas
function exFinal() {
    let dados = [
        ["João", "São Paulo", "(11) 9999-5241"],
        ["Maria", "Ribeirão Preto", "(16) 9999-8596"],
        ["Ana", "Manaus", "(92) 9999-8574"]
    ]
    for (let contador = 0; contador < dados.length; contador++)
        console.log(`Nome: ${dados[contador][0]}, cidade: ${dados[contador][1]}, tel: ${dados[contador][2]}`)
}
console.log(exFinal())

