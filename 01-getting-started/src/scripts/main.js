import functions from './functions.js'

// **********
//
// Add the event listeners
// 

// idNumber.addEventListener('change', (() => {
//     idNumberSize.textContent = functions.size(idNumber.value);
// }));

// Event listeners for calculator

add.addEventListener('click', (() => {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    console.log(num1, num2);
    document.getElementById("response").innerHTML = functions.add(num1, num2);
}));

subtract.addEventListener('click', (() => {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    console.log(num1, num2);
    document.getElementById("response").innerHTML = functions.subtract(num1, num2);
}));

multiply.addEventListener('click', (() => {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    console.log(num1, num2);
    document.getElementById("response").innerHTML = functions.multiply(num1, num2);
}));

divide.addEventListener('click', (() => {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    console.log(num1, num2);
    document.getElementById("response").innerHTML = functions.divide(num1, num2);
}));

// Event Listener for Tax Calculator

taxCalc.addEventListener('click', (() => {
    let effTax = 0
    let taxIncome = parseInt(document.getElementById('input1').value);
    console.log(taxIncome);
    document.getElementById("ouput1").innerHTML = functions.taxCalc(taxPayable);
    console.log(taxPayable);
    effTax = (taxPayable / taxIncome) * 100;
    document.getElementById("ouput2").innerHTML = functions.taxCalc(effTax);
    console.log(effTax);
}));