const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor da conta R$: "))
const valorPago = Number(prompt("Valor pago pelo cliente R$: "))

if (valorPago == valor){
    console.log(`Obrigado, volte sempre!`)
} else if(valor < valorPago){
    const faltou = valorPago - valor
console.log(`Ops, faltou R$${faltou.toFixed(2)}`)
}else (valorPago > valor){
    const troco = valor - valorPago
    console.log(`Troco R$:${troco}`)
}





