// • Se a peça possuir um peso superior a 100gramas, pode cadastrar.
let pecaPeso = 99.9;

if ( pecaPeso >= 100) {
    console.log("Legal, sua peça possui um peso de " + pecaPeso + " gramas, logo, você poderá efetuar o cadastro!");
} else {
    console.log("Ah não, infelizmente sua peça possui um peso de " + pecaPeso + " gramas, logo, você não poderá realizar o cadastro.");
}
console.log("");
// • Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
let listaDePecas = ["Cilindro", "bombas d'água", "coxin", "polia", "JH", "semi eixo", "suspensão","Amortecedor da suspensão", "Anel de pistão", "Bomba elétrica"]
let quantidadeDePecas = listaDePecas.length

if (quantidadeDePecas > 10) {
    console.log("Poxa, devido à quantidade de itens na sua lista, não teremos capacidade em nossas caixas.");
} else {
    console.log("Uhul! seus itens logo serão empacotados!");
}
console.log("");

// • Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

for (let inc = 0; inc <= listaDePecas.length-1; inc++ ){
    let nomeDaPeca = listaDePecas[inc]
    
    if (nomeDaPeca.length < 3) {
        console.log("ERRO! O item " + nomeDaPeca + " tem menos que 3 caracteres.");
    }
}
console.log("");
// PROVOQUEI A MENSAGEM DE ERRO, CHAMANDO A JUNTA HOMOCINÉTICA DE "JH".