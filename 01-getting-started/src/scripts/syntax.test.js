import functions from './syntax'

test('Are these numbers?', () => {
    expect(functions.checkNumber(2, 3)).toBe(6); 
    expect(functions.checkNumber(8, 8)).toBe(64);
});

test('Are these strings?', () => {
    expect(functions.checkString("abc ", "123")).toBe("abc 123");
    expect(functions.checkString("Hello ", "World")).toBe("Hello World");
});

test('Is this a boolean result?', () => {
    expect(functions.checkBoolean(1, 1)).toBe(true);
    expect(functions.checkBoolean(1, 2)).toBe(false);
});

test('Are these arrays?', () => {
    expect(functions.checkArray([1, 2, "abc"])).toBe(3);
    expect(functions.checkArray([1])).toBe(1);
});

test('Is this an object?', () => {
    expect(functions.checkObject({firstName: "Roger"})).toBe("Roger");
    expect(functions.checkObject({firstName: "Sam", lastname: "Smith"})).toBe("Sam");
});

test('Is this undefined?', () => {
    expect(functions.checkUndefined(undefined)).toBe(true);
    expect(functions.checkUndefined(10)).toBe(false);
});

test('Check sample if / else', () => {
    expect(functions.sampleIfElse(2, 1)).toBe(true);
    expect(functions.sampleIfElse(1, 2)).toBe(false);
});

test('Check sample function with parameters and return', () => {
    expect(functions.sampleFunction("A", "B")).toBe("AB");
    expect(functions.sampleFunction(1, 2)).toBe(3);
});

test('Check if element added to front of array', () => {
    expect(functions.arrayAddFront(["Apples", "Bananas"])).toStrictEqual(["Oranges", "Apples", "Bananas"]);
    expect(functions.arrayAddFront([1, 2, 3])).toStrictEqual(["Oranges", 1, 2, 3]);
});

test('Check if element added to back of array', () => {
    expect(functions.arrayAddBack(["Apples", "Bananas"])).toStrictEqual(["Apples", "Bananas", "Oranges"]);
    expect(functions.arrayAddBack([1, 2, 3])).toStrictEqual([1, 2, 3, "Oranges"]);
});

test('Update the values in an array', () => {
    expect(functions.arrayUpdateValue(["Apples", "Bananas"])).toStrictEqual(["Oranges", "Bananas"]);
    expect(functions.arrayUpdateValue([1, 2])).toStrictEqual(["Oranges", 2]);
});

test('Sample For loop', () => {
    expect(functions.sampleForLoop(50)).toBe(1275);
    expect(functions.sampleForLoop(100)).toBe(5050);
});

test('Sample For/In loop', () => {
    expect(functions.sampleForInLoop({firstName: "John", lastName: "Doe", age: 25})).toBe("John Doe 25 ");
    expect(functions.sampleForInLoop({make: "Mazda", model: "3", trim: "GT"})).toBe("Mazda 3 GT ");
});

test('Sample While loop', () => {
    expect(functions.sampleWhileLoop(10)).toBe("The counter is at: 10");
    expect(functions.sampleWhileLoop(100)).toBe("The counter is at: 100");
});

test('Sample Do While loop', () => {
    expect(functions.sampleDoWhileLoop(10)).toBe("The counter is at: 10");
    expect(functions.sampleDoWhileLoop(100)).toBe("The counter is at: 100");
});

test('Sample For Each loop', () => {
    expect(functions.sampleForEachLoop([3, 4, 6, 7])).toBe(20);
    expect(functions.sampleForEachLoop([0, 0, 0, 1])).toBe(1);
});

test('Sample for Objects / Dictionaries', () => {
    expect(functions.sampleObjDict({type:"Fiat", model:"500", color:"white"})).toBe("500");
    expect(functions.sampleObjDict({type: "Mazda", model: "3", color: "brown"})).toBe("3");
});