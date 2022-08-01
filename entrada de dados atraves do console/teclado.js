const readline = require('readline')

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

teclado.question('Digite seu nome: ', (resposta)=>{
    console.log('olá ' + resposta);
    teclado.close();
})