// 2. Desenvolva a tabuada de um número usando for.

export function exercicio2Rep():void{
    
let numeros = Number(prompt("Informe um número: "))

for(let i=0; i<10; i++){
    document.writeln(numeros+" x "+ i + " = "+(numeros*i))
}
}