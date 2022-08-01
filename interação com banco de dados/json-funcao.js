function hoje() {
    var agora = new Date();
    return(agora.getDate() + "/" +
        ("0"+(agora.getMonth() + 1)).slice(-2) + "/" +
        agora.getFullYear() +  "  Horas: " +
        agora.getHours() + ":" +
        agora.getMinutes() + ":" +
        agora.getSeconds());
}
var produto = {
    codigo: 10, descricao:
        "Televisor", preco: 1990.00,
    data: function () { return hoje(); }
};
console.log("Dados do produto: ");
console.log("Código: " + produto.codigo);
console.log("Descrição: " + produto.descricao);
console.log("Preço: " + produto.preco);
console.log("Data Cadastro: " + produto.data());