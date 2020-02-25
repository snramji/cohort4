const functions = {

// define attributes / variables

//     check if vlaue entered is a number

    isNumber: (num) => {
        return !isNaN(num);
    },

    //     check if value is a string

    isString: (str) => {
        return isNaN(str);
    },

    //     check if result is boolean - true or false

    isBoolean: (var1, var2) => {
        if ( var1 == var2) {
            return true;
        }else{
            return false;
        }
    }


    //     array
    //     dictionary / objects
    //     undefined
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