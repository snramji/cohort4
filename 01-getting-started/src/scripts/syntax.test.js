import synFunctions from './syntax'

test('Are these numbers?', () => {
    expect(synFunctions.checkNumber(2, 3)).toBe(6); 
    expect(synFunctions.checkNumber(8, 8)).toBe(64);
});

test('Are these strings?', () => {
    expect(synFunctions.checkString("abc ", "123")).toBe("abc 123");
    expect(synFunctions.checkString("Hello ", "World")).toBe("Hello World");
});

test('Is this a boolean result?', () => {
    expect(synFunctions.checkBoolean(1, 1)).toBe(true);
    expect(synFunctions.checkBoolean(1, 2)).toBe(false);
});

test('Are these arrays?', () => {
    expect(synFunctions.checkArray([1, 2, "abc"])).toBe(3);
    expect(synFunctions.checkArray([1])).toBe(1);
});

test('Is this an object?', () => {
    expect(synFunctions.checkObject({firstName: "Roger"})).toBe("Roger");
    expect(synFunctions.checkObject({firstName: "Sam", lastname: "Smith"})).toBe("Sam");
});

test('Is this undefined?', () => {
    expect(synFunctions.checkUndefined(undefined)).toBe(true);
    expect(synFunctions.checkUndefined(10)).toBe(false);
});

test('Check sample if / else', () => {
    expect(synFunctions.sampleIfElse(2, 1)).toBe(true);
    expect(synFunctions.sampleIfElse(1, 2)).toBe(false);
});

test('Check sample function with parameters and return', () => {
    expect(synFunctions.sampleFunction("A", "B")).toBe("AB");
    expect(synFunctions.sampleFunction(1, 2)).toBe(3);
});

test('Check if element added to front of array', () => {
    expect(synFunctions.arrayAddFront(["Apples", "Bananas"])).toStrictEqual(["Oranges", "Apples", "Bananas"]);
    expect(synFunctions.arrayAddFront([1, 2, 3])).toStrictEqual(["Oranges", 1, 2, 3]);
});

test('Check if element added to back of array', () => {
    expect(synFunctions.arrayAddBack(["Apples", "Bananas"])).toStrictEqual(["Apples", "Bananas", "Oranges"]);
    expect(synFunctions.arrayAddBack([1, 2, 3])).toStrictEqual([1, 2, 3, "Oranges"]);
});

test('Update the values in an array', () => {
    expect(synFunctions.arrayUpdateValue(["Apples", "Bananas"])).toStrictEqual(["Oranges", "Bananas"]);
    expect(synFunctions.arrayUpdateValue([1, 2])).toStrictEqual(["Oranges", 2]);
});

test('Sample For loop', () => {
    expect(synFunctions.sampleForLoop(50)).toBe(1275);
    expect(synFunctions.sampleForLoop(100)).toBe(5050);
});

test('Sample For/In loop', () => {
    expect(synFunctions.sampleForInLoop({firstName: "John", lastName: "Doe", age: 25})).toBe("John Doe 25 ");
    expect(synFunctions.sampleForInLoop({make: "Mazda", model: "3", trim: "GT"})).toBe("Mazda 3 GT ");
});

test('Sample While loop', () => {
    expect(synFunctions.sampleWhileLoop(10)).toBe("The counter is at: 10");
    expect(synFunctions.sampleWhileLoop(100)).toBe("The counter is at: 100");
});

test('Sample Do While loop', () => {
    expect(synFunctions.sampleDoWhileLoop(10)).toBe("The counter is at: 10");
    expect(synFunctions.sampleDoWhileLoop(100)).toBe("The counter is at: 100");
});

test('Sample For Each loop', () => {
    expect(synFunctions.sampleForEachLoop([3, 4, 6, 7])).toBe(20);
    expect(synFunctions.sampleForEachLoop([0, 0, 0, 1])).toBe(1);
});

test('Sample for Objects / Dictionaries', () => {
    expect(synFunctions.sampleObjDict({type:"Fiat", model:"500", color:"white"})).toBe("500");
    expect(synFunctions.sampleObjDict({type: "Mazda", model: "3", color: "brown"})).toBe("3");
});