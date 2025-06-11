let num1 = 20;
let num2 = 30;
let soma = num1 + num2;
console.log("1 - A soma é: " + soma);

// variavel string
let mensagem = "Olá, mundo!";
console.log("2 - Mensagem: " + mensagem);

// variavel booleano
let verdadeiro = true;
console.log("3 - Valor booleano: " + verdadeiro);

// variavel numérica
let pi = 3.1415;
console.log("4 - Valor de pi: " + pi);

// 2
let nome = prompt("7 - Qual o seu nome?");
let idade2 = prompt("Qual a sua idade?");
let bairro = prompt("qual o seu bairro?");
alert("Seu nome em maiúsculas: " + nome.toUpperCase());

let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
let somaUsuario = numero1 + numero2;
alert("A soma dos números é: " + somaUsuario);

// 3
let nomeCompleto = "Valentina Dorneles de Quadros Leal";
let nomeModificado = nomeCompleto.replace("Quadros", "Leal");
let resultado = "Nome modificado: " + nomeModificado;
console.log("5 - " + resultado);

// 4
let preço = 100.0;
let desconto = 0.2;
let precoFinal = preco * (1 - desconto);
console.log("6 - O preço final com desconto é: " + precoFinal);

// 5
let idade = parseInt(prompt("Digite sua idade:"));

if (idade < 18) {
console.log("Você é adolescente");
} else if (idade >= 18 && idade < 60) {
console.log("Você é adulto.");
} else {
console.log("Você é idoso.");
}

// 6
if (idade >= 18) {
console.log(" pode dirigir.");
} else {
console.log("não pode dirigir.");
}

// 7 - positivo, negativo ou zero
let numero = parseInt(prompt(" digite um número inteiro:"));

if (numero > 0) {
console.log("O número é positivo.");
} else if (numero < 0) {
console.log("O número é negativo.");
} else {
console.log("O número é zero.");
}

// 8 - calculo de IMC
let altura = parseFloat(prompt("digite sua altura em metros:"));
let peso = parseFloat(prompt(" digite seu peso em quilogramas:"));

let imc = peso / (altura * altura);
console.log("Seu IMC é: " + imc.toFixed(2));

if (imc >= 18.5 && imc <= 24.9) {
console.log("teu IMC ta bom");
} else {
console.log("teu IMC ta mal");
}

let opcao = parseInt(prompt(
"Escolha uma opção:\n" +
"1 - Número de 1 a 7 → Dia da semana\n" +
"2 - Classificação de idade\n" +
"3 - Calculadora básica\n"
));

if (opcao === 1) {
// 9: 1 a 7 Dia da semana
let numero = parseInt(prompt("Digite um número de 1 a 7:"));
let dia;

switch (numero) {
case 1:
dia = "Domingo";
break;
case 2:
dia = "Segunda-feira";
break;
case 3:
dia = "Terça-feira";
break;
case 4:
dia = "Quarta-feira";
break;
case 5:
dia = "Quinta-feira";
break;
case 6:
dia = "Sexta-feira";
break;
case 7:
dia = "Sábado";
break;
default:
dia = "Número inválido! Digite um número de 1 a 7.";
}

console.log("Dia da semana: " + dia);

} else if (opcao === 2) {
// 10: Classificação de idade
let idade = parseInt(prompt("Digite a sua idade:"));

if (idade >= 0 && idade <= 12) {
console.log(" você é criança.");
} else if (idade >= 13 && idade <= 17) {
console.log(" você é adolescente.");
} else if (idade >= 18 && idade <= 59) {
console.log(" você é adulto.");
} else if (idade >= 60) {
console.log(" você é idoso.");
} else {
console.log("Idade inválida.");
}

} else if (opcao === 3) {
// 11: Calculadora básica
let operacao = prompt("Escolha a operação: +, -, *, /");
let numero1 = parseFloat(prompt("escreva o primeiro número:"));
let numero2 = parseFloat(prompt("escreva o segundo número:"));
let resultado;

if (operacao === "+") {
resultado = numero1 + numero2;
} else if (operacao === "-") {
resultado = numero1 - numero2;
} else if (operacao === "*") {
resultado = numero1 * numero2;
} else if (operacao === "/") {
if (numero2 !== 0) {
resultado = numero1 / numero2;
} else {
resultado = "Erro! Divisão por zero.";
}
} else {
resultado = "Operação inválida!";
}

console.log("Resultado: " + resultado);

} else {
console.log("Opção inválida! Escolha 1, 2 ou 3.");
}
let valorOriginal = parseFloat(prompt("Informe o valor do produto:"));

// 12: código promocional
let codigo = prompt("Informe o código promocional:\nDESC1 - 05% de desconto\nDESC2 - 10% de desconto\nDESC3 - 15% de desconto\nDESC4 - 20% de desconto\nDESC5 - 25% de desconto");

let desconto1 = 0;
let mensagem1 = "";

switch (codigo.toUpperCase()) {
case "DESC1":
desconto = 0.05;
mensagem = "5% de desconto";
break;
case "DESC2":
desconto = 0.10;
mensagem = "10% de desconto";
break;
case "DESC3":
desconto = 0.15;
mensagem = "15% de desconto";
break;
case "DESC4":
desconto = 0.20;
mensagem = "20% de desconto";
break;
case "DESC5":
desconto = 0.25;
mensagem = "25% de desconto";
break;
default:
alert("Erro: código promocional inválido!");
desconto = null;
}

if (desconto !== null){let valorComDesconto = valorOriginal * (1 - desconto);}
alert(`${mensagem}\nValor original: R$ ${valorOriginal.toFixed(2)}nValor com desconto: R$ ${valorComDesconto.toFixed(2)}`)
