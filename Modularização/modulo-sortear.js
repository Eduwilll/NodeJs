exports.real = function () {
    return Math.random();    
};

exports.inteiro = function (inicio,fim) {
    return Math.floor(Math.random() * fim + inicio);
};