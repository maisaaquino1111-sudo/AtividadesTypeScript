// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case
export function exercicio3Cond():void{

    let numA: number=Number(prompt("Informe o primeiro número: "))
    let numB: number=Number(prompt("Informe o segundo número: "))

    let opcao:number=Number(prompt("Informe a opção: "))
    let resultado:number

    switch (opcao){
        case 1:
            resultado = numA+numB
            console.log("Resultado Soma: ",resultado)
            break;
        case 2:
            resultado = numA-numB
            console.log("Resultado subtração: ",resultado)
            break;
        case 3:
            resultado = numA*numB
            console.log("Resultado Multiplicação: ",resultado)
            break;
        case 4:
            resultado = numA/numB
            console.log("Resultado Divisão: ",resultado)
            break;
    }
}