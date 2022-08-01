var produtos = [{
    codigo: 11, 
    descricao:"Geladeira", 
    preco: 2990.00
},
{
    codigo: 12, 
    descricao: "Fogao", 
    preco:840.00
},
{
    codigo: 13, 
    descricao: "Computador",
    preco: 3500.00
}];
console.log("Produtos: ");
for (var i = 0; i < produtos.length; i++) {
    console.log("---");
    console.log("Código: " + produtos[i].codigo);
    console.log("Descrição: " + produtos[i].descricao);
    console.log("Preço: " + produtos[i].preco);

}