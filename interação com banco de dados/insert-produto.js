const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const cliente = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function inserir() {
    try {
        await cliente.connect();
        console.log("Conectado!");
        const banco = cliente.db("test");
        await banco.collection("produtos").insertOne({ codigo: 15, descricao: "Cama de solteiro", preco: 250 });
    } finally {
        console.log("Inserido!");
        await cliente.close();
    }
}
inserir();
