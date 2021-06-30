// função para clcular a média de um aluno e informar se aprovado ou nõa.
function mediaCond() {
    let nome = "Fulano"
    let nota1 = 9
    let nota2 = 9.5
    let corte = 7
    let media = (nota1 + nota2) / 2
    // verifica se a média é maior ou igual a 7
    if (media >= corte) {
        return `A média de ${nome} é igual a ${media}. De acordo com a nota de corte, ${corte}, ele foi aprovado.`
    // retorno caso a média seja menor que 7
    } else {
        return `A média de ${nome} é igual a ${media}. De acordo com a nota de corte, ${corte}, ele não foi aprovado.`
    }
}
console.log(mediaCond())