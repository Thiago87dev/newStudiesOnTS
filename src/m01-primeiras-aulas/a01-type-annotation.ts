//Geralmente não é preciso colocar tipo... O proprio ts infere o tipo automaticamente

// Tipos basicos
let nome: string = 'Thiago'
let idade: number = 25 // Qlq numero: int, float etc...
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer-symbol')
// let big: bigint = 10n

// Arrays
let arrayNumerico: Array<number> = [1, 2, 3]
let arrayString: Array<string> = ['a', 'b', 'c']

// Arrays - Melhor forma
let arrayNumerico2: number[] = [1, 2, 3]
let arrayString2: string[] = ['a', 'b', 'c']

// Objetos
let pessoa:{nome:string, idade: number, adulto?: boolean} = { // ? = opcional
  nome: 'Thiago',
  idade: 25,
  adulto: true
}

// Funçoes
function soma(a:number, b:number): number {
  return a + b
}

const soma2: (a:number, b:number) => number = (a, b) => a + b
// JS -> const soma2 = (a, b) => a + b
