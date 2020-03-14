import functions from './functions.js'
import simCalc from './simcalc.js'
// import taxCalculation from './taxcalc.js'
import arrays from './arrays.js'


// **********
//
// Add the event listeners
// 

// Event Listener for Size Function

    idNumber.addEventListener('change', (() => {
        idNumberSize.textContent = functions.size(idNumber.value);
    }));

// Event Listeners for Simple Calculator

    add.addEventListener('click', (() => {
        let num1 = parseInt(document.getElementById('number1').value);
        let num2 = parseInt(document.getElementById('number2').value);
        console.log(num1, num2);
        document.getElementById("response").innerHTML = simCalc.add(num1, num2);
    }));

    subtract.addEventListener('click', (() => {
        let num1 = parseInt(document.getElementById('number1').value);
        let num2 = parseInt(document.getElementById('number2').value);
        console.log(num1, num2);
        document.getElementById("response").innerHTML = simCalc.subtract(num1, num2);
    }));

    multiply.addEventListener('click', (() => {
        let num1 = parseInt(document.getElementById('number1').value);
        let num2 = parseInt(document.getElementById('number2').value);
        console.log(num1, num2);
        document.getElementById("response").innerHTML = simCalc.multiply(num1, num2);
    }));

    divide.addEventListener('click', (() => {
        let num1 = parseInt(document.getElementById('number1').value);
        let num2 = parseInt(document.getElementById('number2').value);
        console.log(num1, num2);
        document.getElementById("response").innerHTML = simCalc.divide(num1, num2);
    }));

// Event Listener for Tax Calculator

    taxCalc.addEventListener('click', (() => {
        let afterTaxIncome = 0;
        let effTax = 0;
        let taxIncome = parseFloat(document.getElementById("input1").value);
        const taxPayable = functions.taxCalculation(taxIncome)
        console.log(taxIncome);
        document.getElementById("output1").innerHTML = taxPayable;
        console.log(taxPayable);
        effTax = (taxPayable / taxIncome) * 100;
        document.getElementById("output2").innerHTML = effTax;
        console.log(effTax);
        afterTaxIncome = taxIncome - taxPayable;
        document.getElementById("output3").innerHTML = afterTaxIncome;
        console.log(afterTaxIncome);
    }));

// Event Listener For Working With Arrays

        const inputArray = [];
        // let sum = 0;

        addArray.addEventListener('click', (() => {
            arrays.arrayAdd(inputArray, arrayInput.value);
        }));

        showArray.addEventListener('click', (() => {
            document.getElementById("message").innerHTML = arrays.arrayShow(inputArray);
        }));

        totalArray.addEventListener('click', (() => {
            document.getElementById("message").innerHTML = arrays.arrayTotal(inputArray);
            console.log(inputArray)
            console.log(inputArray.reduce((total, itemOfArray) => total + itemOfArray, 0));
        }));

        clearArray.addEventListener('click', (() => {
            document.getElementById("message").innerHTML = arrays.arrayClear(inputArray);
        }));

// Event Listener For Working With Dictionaries

        lookupDictionary.addEventListener('click',(() => {

        }));






