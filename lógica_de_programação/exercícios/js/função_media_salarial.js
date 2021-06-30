function mediaMensal() {
    let nome = "Fulano"
    let jan = 5000
    let fev =  5500
    let media = (jan + fev) / 2
    return `A méida salarial de ${nome} no primeiro bimestre é de ${media.toLocaleString("pt-BR")}`
}
console.log(mediaMensal())