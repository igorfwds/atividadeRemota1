// • Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

// • Se a peça possuir um peso superior a 100gramas, pode cadastrar.
let pecaPeso = 99.9;

if ( pecaPeso >= 100) {
    console.log("Legal, sua peça possui um peso de " + pecaPeso + " gramas, logo, você poderá efetuar o cadastro!");
} else {
    console.log("Ah não, infelizmente sua peça possui um peso de " + pecaPeso + " gramas, logo, você não poderá realizar o cadastro.");
}

// • Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
