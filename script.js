/*Const é usado para nomear uma constant */
const nameUser = document.getElementById("name").value;
/*"document.getElementById() é usado para puxar a informação que foi utilizada no site usando o id"*/
const startingCapital = document.getElementById("startingCapital");
const interestRate = document.getElementById("interestRate");
const numberMonths = document.getElementById("numberMonths");

function calculateAmount()/*gera a função que sera puxada para o html*/ {
    let capital = parseFloat(startingCapital.value);
    /*let é uasdo para criar uma variavel que sera usada momentaniamente dentro da função */
    let interest = parseFloat(interestRate.value) / 100;
    let months = parseInt(numberMonths.value);

    let calculation = capital * Math.pow(1 + interest, months);

    let message = nameUser + " No final de " + months + " meses você tera um capital de " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculation.toFixed(2)); /*"toFixed()"" é usado para definir quantos numeros aparecerão depois da ,*/
     /*Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }) foi usado para converter o resultado da variavel para a moeda Brasileira*/
    alert(message);
}   