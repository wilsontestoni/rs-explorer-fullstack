

const numberOne = Number(prompt("Digite o primeiro número:"))
const numberTwo = Number(prompt("Digite o segundo número:"))

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const restOfDivision = numberOne % numberTwo
const pairOrOdd = sum % 2 === 0 ? "par" : "impar"
const equalityOfInputs = numberOne === numberTwo ? "iguais" : "diferentes"

alert(`A soma entre os dois números é ${sum}`)
alert(`A subtração entre os dois números é ${subtraction}`)
alert(`A multiplicação entre os dois números é ${multiplication}`)
alert(`A divisão dos entre os dois números é ${division}`)
alert(`A o resto da divisão entre os dos dois números é ${restOfDivision}`)
alert(`A soma dos dois numeros é um número ${pairOrOdd}`)
alert(`Os dois números inseridos são ${equalityOfInputs}`)

