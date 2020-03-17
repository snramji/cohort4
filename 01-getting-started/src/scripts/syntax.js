const synFunctions = {

// define attributes / variables

    // check if values are numbers

    checkNumber: (num1, num2) => {
        return num1 * num2;
    },

    // check if values are strings

    checkString: (str1, str2) => {
        return str1.concat(str2);
    },

    // check if result is boolean - true or false

    checkBoolean: (var1, var2) => {
        if ( var1 === var2) {
            return true;
        }else{
            return false;
        }
    },

    // check if values entered are arrays

    checkArray: (value) => {
        return value.length;
    },    

    // check if values entered are objects

    checkObject: (obj) => {
        return obj.firstName;
    },

    // check if values entered are undefined

    checkUndefined: (undef) => {
        if (undef == undefined) {
            return true;
        }else{
            return false;
        }
    },
    
    // sample if / else
    
    sampleIfElse: (sample1, sample2) => {
        if (sample1 > sample2) {
            return true;
        }else{
            return false;
        }
    },

// functions with parameters and returns
    // parameters
    // returns

    sampleFunction: (param1, param2) => {
        return param1 + param2;
    },

// arrays
    // add an element to the front of an array

    arrayAddFront: (item) => {
        item.unshift("Oranges");
        return item;
    },

    // add an element to the end of an array

    arrayAddBack: (item1) => {
        item1.push("Oranges");
        return item1;
    },

    // update values of an array

    arrayUpdateValue: (item2) => {
        item2[0] = "Oranges";
        return item2;
    },

// loops 
    // sample 'for' loop

    sampleForLoop: (n) => {
        var sum = 0;
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

// // Objects / Dictionaries
//     // declare object
//     // lookup key to retrieve value

    sampleObjDict: (lastObject) => {
        console.log(lastObject.model);
        return lastObject.model;
    }

}

export default synFunctions;