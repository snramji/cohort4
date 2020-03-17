// Logic for Working With Arrays

const arrays = {     
    
    arrayAdd: (inputArray, itemOfArray) => {
        inputArray.push(itemOfArray);
        return inputArray;
    },

    arrayShow: (inputArray) => {
        return inputArray;
    },

    arrayTotal: (inputArray) => {
        let sum = 0;
        inputArray.forEach(mySumArray);
        function mySumArray(item) {
            sum += parseInt(item);
        }
        console.log(sum)
        return sum;
    },

    arrayClear: (inputArray) => {
        inputArray = [];
        return inputArray;
    }

};

export default arrays;