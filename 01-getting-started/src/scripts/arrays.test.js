import arrays from './arrays'

// Tests for Working With Arrays

test('Check if Add Array Function is Working', () => {
    const inputArray = [];
    expect(inputArray.length).toBe(0);
    const test1 = arrays.arrayAdd(inputArray, 2);
    expect(test1.length).toBe(1);
    expect(test1[0]).toBe(2);
    const test2 = arrays.arrayAdd(inputArray, 3);
    expect(test2.length).toBe(2);
    expect(test2[1]).toBe(3);
});

test('Check if Show Array Function is Working', () => {
    let test3 = arrays.arrayShow([4,5]);
    expect(test3).toEqual([4,5]);
    let test4 = arrays.arrayShow([6,7,8]);
    expect(test4).toEqual([6,7,8]);
});

test('Check if Total Array Function is Working', () => {
    expect(arrays.arrayTotal([2, 3, 5])).toBe(10); 
    expect(arrays.arrayTotal([10, 20, 30, 40])).toBe(100);
});

test('Check if Clear Array Function is Working', () => {
    expect(arrays.arrayClear([1,2])).toEqual([]);
    const inputArray =[];
    expect(inputArray.length).toBe(0);
});