import simCalc from './simcalc'

// Simple Calculator Tests

test('Does that add function work?', () => {
    expect(simCalc.add(1,2)).toBe(3);
    expect(simCalc.add(101,202)).toBe(303);
});

test('Does that subtract function work?', () => {
    expect(simCalc.subtract(2,1)).toBe(1);
    expect(simCalc.subtract(200,100)).toBe(100);
});

test('Does that multiply function work?', () => {
    expect(simCalc.multiply(2,3)).toBe(6);
    expect(simCalc.multiply(50,100)).toBe(5000);
});

test('Does that divide function work?', () => {
    expect(simCalc.divide(4,2)).toBe(2);
    expect(simCalc.divide(50,0)).toBe(Infinity);
});

// // Tax Calculator Function Tests

// test('Does the tax calculator work?', () => {
//     expect(functions.taxCalculation(48535)).toBe(7280);
//     expect(functions.taxCalculation(48536)).toBe(7280);
//     expect(functions.taxCalculation(97069)).toBe(17229);
//     expect(functions.taxCalculation(97070)).toBe(17230);
//     expect(functions.taxCalculation(150473)).toBe(31115);
//     expect(functions.taxCalculation(150474)).toBe(31115);
//     expect(functions.taxCalculation(214368)).toBe(49645);
//     expect(functions.taxCalculation(214369)).toBe(49645);
//     expect(functions.taxCalculation(300000)).toBe(77904);
//     expect(functions.taxCalculation(500000)).toBe(143904);
// });

// // Tests for Working arrays

// test('Check if Add Array Function is Working', () => {
//     const inputArray = [];
//     expect(inputArray.length).toBe(0);
//     const test1 = arrays.arrayAdd(inputArray, 2);
//     expect(test1.length).toBe(1);
//     expect(test1[0]).toBe(2);
//     const test2 = arrays.arrayAdd(inputArray, 3);
//     expect(test2.length).toBe(2);
//     expect(test2[1]).toBe(3);
// });

// test('Check if Show Array Function is Working', () => {
//     let test3 = arrays.arrayShow([4,5]);
//     expect(test3).toEqual([4,5]);
//     let test4 = arrays.arrayShow([6,7,8]);
//     expect(test4).toEqual([6,7,8]);
// });

// test('Check if Total Array Function is Working', () => {
//     expect(arrays.arrayTotal([2, 3, 5])).toBe(10); 
//     expect(arrays.arrayTotal([10, 20, 30, 40])).toBe(100);
// });

// test('Check if Clear Array Function is Working', () => {
//     expect(arrays.arrayClear([1,2])).toEqual([]);
//     const inputArray =[];
//     expect(inputArray.length).toBe(0);
// });