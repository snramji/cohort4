const functions = {

// define attributes / variables

    //     check if values are numbers

    checkNumber: (num1, num2) => {
        return num1 * num2;
    },

    //     check if values are strings

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

    //     check if values entered are arrays

    checkArray: (value) => {
        return value.length;
    },    

    //     check if values entered are objects

    checkObject: (obj) => {
        return obj.firstName;
    },

    //     check if values entered are undefined

    checkUndefined: (undef) => {
        if (undef == undefined) {
            return true;
        }else{
            return false;
        }
    }


// sample if / else
// functions
//     parameters
//     returns
// arrays
//     add to the front
//     add to the end
//     update values
// loops 
//     for
//     for/in
//     while
//     do while
//     forEach (with array and function)
// Objects / Dictionaries
//     declare object
//     lookup key to retrieve value


}

export default functions;