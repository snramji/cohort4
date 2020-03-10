
const functions = {
    
    // define attributes / variables

        // check if values are numbers

    checkNumber: (num1, num2) => {
        console.log(num1, num2);
        return num1 * num2;
    },

        // check if values are strings

    checkString: (str1, str2) => {
        console.log(str1, str2);
        return str1.concat(str2);
    },

    // check if values entered are arrays

    checkArray: (value) => {
        console.log(value.length);
        return value.length;
    },    

    // check if values entered are objects

    checkObject: (obj) => {
        console.log(obj.firstName);
        return obj.firstName;
    },

    // check if values entered are undefined

    checkUndefined: (undef) => {
        if (undef == undefined) {
            console.log(undef);
            console.log(true);
            return true;
        }else{
            console.log(undef);
            console.log(false);
            return false;
        }
    },

    // sample if / else

    sampleIfElse: (sample1, sample2) => {
        if (sample1 > sample2) {
            console.log(sample1, sample2);
            console.log(true);
            return true;
        }else{
            console.log(sample1, sample2);
            console.log(false);
            return false;
        }
    },

// functions with parameters and returns
    // parameters
    // returns

    sampleFunction: (param1, param2) => {
        console.log(param1, param2);
        console.log(param1 + param2);
        return param1 + param2;
    },

    // add an element to the front of an array

    arrayAddFront: (item) => {
        item.unshift("oranges");
        console.log(item);
        return item;
    },

    // add an element to the end of an array

    arrayAddBack: (item1) => {
        item1.push("oranges");
        console.log(item1);
        return item1;
    },

    // update values of an array

    arrayUpdateValue: (item2) => {
        item2[0] = "oranges";
        console.log(item2);
        return item2;
    },

// loops 

    // sample 'for' loop

    sampleForLoop: (n) => {
        let sum = 0;
        for (var i = 1; i <= n; i++) {
            sum += i;
        }
        console.log(sum)
        return sum;
    },

    // sample 'for/in' loop for objects

    sampleForInLoop: (object1) => {
        let string1 = "";
        let x = 0;
        for (x in object1) {
            string1 += object1[x] + " ";
        }
        console.log(string1);
        return string1;
    },

    // sample 'while' loop

    sampleWhileLoop: (number2) => {
        let string2 = 0;
        let i = 0;
        while (i <= number2) {
            string2 = i;
            i++;
        }
        console.log("The counter is at: " + string2);
        return "The counter is at: " + string2;
    },

    // sample 'do while' loop

    sampleDoWhileLoop: (number3) => {
        let string3 = 0;
        let i = 0;
        do {
            string3 = i;
            i++;
        }
        while (i <= number3);
        console.log("The counter is at: " + string3);
        return "The counter is at: " + string3;
    },

    // forEach (with array and function)

    sampleForEachLoop: (array4) => {
        let sum = 0;
        array4.forEach(mySumArray);
        function mySumArray(item) {
            sum += item;
        }
        console.log(sum)
        return sum;
    },

// Objects / Dictionaries
    // declare object
    // lookup key to retrieve value

    sampleObjDict: (lastObject) => {
        console.log(lastObject.model);
        return lastObject.model;
    },

// Size Function
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 100) return "large";
        return "extra large";
    },

// Even Number Function

    isEven: (num) => {
        if ( num % 2 == 0) {
            return 'Even Number';
        }else{
            return'Odd Number';
        }
    },

// Tax Calculator

    taxCalculation: (taxIncome) => {
        let taxPayable = 0;
        if (taxIncome <= 48535) {
           taxPayable= taxIncome * 0.15;
        } else if (taxIncome >= 48536 && taxIncome <= 97069) {
            taxPayable = ((taxIncome-48535) * 0.205) + 7280;
        } else if (taxIncome >= 97070 && taxIncome <= 150473) {
            taxPayable = ((taxIncome-97069) * 0.26) + 17230;
        } else if (taxIncome >= 150474 && taxIncome <= 214368) {
            taxPayable = ((taxIncome-150473) * 0.29) + 31115;
        } else if (taxIncome >= 214369) {
            taxPayable = ((taxIncome-214368) * 0.33) + 49645;
        }  
        console.log(taxIncome);
        console.log(taxPayable);
        // return Number(taxPayable.toFixed(0));
        return taxPayable;  
    }




};

export default functions;

