const prompt = require("prompt-sync")()

const brasil = Number(prompt("Hora no Brasil: "))

if (brasil <= 18){
    console.log(`Hora na França: ${brasil+5}h`)
}else{
    const franca = (brasil + 5) - 24
    console.log(`Hora na França: ${franca}h`)
}