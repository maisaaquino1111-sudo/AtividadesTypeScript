// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

export function exercicio1Rep():void{

let numeros=Number(prompt("Infome o número: "))
alert("Digite (0) caso queira parar o programa!")

let quantidade=0
let soma=0

while(numeros !==0){
    if(numeros > 0){
        quantidade++
        soma += numeros
    }
numeros=Number(prompt("Infome o número: "))
alert("Digite (0) caso queira parar o programa!")
}
console.log("Quantidade: ",quantidade)
console.log("Soma: ",soma)
}