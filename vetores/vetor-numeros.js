var num= Array();
console.log('Tamanho inicial:' + num.length);
for (var i = 0; i < 100; i++) {
    num[i]= Math.floor(Math.random() * 500 + 1)
    console.log(num[i]);
}
console.log('Tamanho final: '+ num.length);