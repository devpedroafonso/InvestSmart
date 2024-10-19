const name = document.getElementById("name");
const startingCapital = document.getElementById("startingCapital");
const interestRate = document.getElementById("interestRate");
const numberMonths = document.getElementById("numberMonths");

function calculateAmount(){
    let capital = parseFloat(startingCapital.value);
    let interest = parseFloat(interestRate.value)/100;
    let months = parseInt(numberMonths.value);
    let calculation = capital * Math.pow(1 + interest, months);
    let message = name.value+"no final de "+months+" meses você tera um capital de R$"+calculation.toFixed(2);
    alert(message);
}