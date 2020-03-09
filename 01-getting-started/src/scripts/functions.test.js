import functions from './functions'

// Attributes & Variables Tests

test('Check if Number', () => {
    expect(functions.checkNumber(2, 3)).toBe(6); 
    expect(functions.checkNumber(10, 10)).toBe(100);
});

test('Check if String', () => {
    expect(functions.checkString("Hello ", "There!")).toBe("Hello There!"); 
    expect(functions.checkString("John ", "Smith")).toBe("John Smith");
});

test('Check if Array', () => {
    expect(functions.checkArray([1, 2, 3])).toBe(3); 
    expect(functions.checkArray(["a", "b", "c", "d"])).toBe(4);
});

test('Check if Object', () => {
    expect(functions.checkObject({firstName: "John", lastName: "Smith"})).toBe("John"); 
    expect(functions.checkObject({firstName: "Bob", lastName: "Brown"})).toBe("Bob");
});

test('Check if Undefined', () => {
    expect(functions.checkUndefined()).toBe(true); 
    expect(functions.checkUndefined(1)).toBe(false);
});

test('Test If Else', () => {
    expect(functions.sampleIfElse(2, 1)).toBe(true); 
    expect(functions.sampleIfElse(1, 2)).toBe(false);
});

// Tests for functions with parameters and returns

test('Test Function with Parameters and Return', () => {
    expect(functions.sampleFunction(2, 1)).toBe(3); 
    expect(functions.sampleFunction(100, 200)).toBe(300);
});

test('Test Add to Array Front', () => {
    expect(functions.arrayAddFront(["apples"])).toStrictEqual(["oranges", "apples"]); 
    expect(functions.arrayAddFront([1, 2, 3])).toStrictEqual(["oranges", 1, 2, 3]);
});

test('Test Add to Array Back', () => {
    expect(functions.arrayAddBack(["apples"])).toStrictEqual(["apples", "oranges"]); 
    expect(functions.arrayAddBack([1, 2, 3])).toStrictEqual([1, 2, 3, "oranges"]);
});

test('Test Update Array Value', () => {
    expect(functions.arrayUpdateValue(["apples"])).toStrictEqual(["oranges"]); 
    expect(functions.arrayUpdateValue([1, 2, 3])).toStrictEqual(["oranges", 2, 3]);
});

// Loops

test('Test For Loop', () => {
    expect(functions.sampleForLoop(50)).toBe(1275); 
    expect(functions.sampleForLoop(100)).toBe(5050);
});

test('Test For In Loop', () => {
    expect(functions.sampleForInLoop({first: "A", second: "B", third: "C"})).toBe("A B C "); 
    expect(functions.sampleForInLoop({make: "Mazda", model: "3"})).toBe("Mazda 3 ");
});

test('Test While Loop', () => {
    expect(functions.sampleWhileLoop(10)).toBe("The counter is at: 10"); 
    expect(functions.sampleWhileLoop(100)).toBe("The counter is at: 100");
});

test('Test Do While Loop', () => {
    expect(functions.sampleDoWhileLoop(10)).toBe("The counter is at: 10"); 
    expect(functions.sampleDoWhileLoop(100)).toBe("The counter is at: 100");
});

test('Test For Each Loop', () => {
    expect(functions.sampleForEachLoop([2, 3, 5])).toBe(10); 
    expect(functions.sampleForEachLoop([10, 20, 30, 40])).toBe(100);
});

// Test Objects / Dictionaries

test('Test For Objects and Dictionaries', () => {
    expect(functions.sampleObjDict({make: "Ford", model: "Mustang"})).toBe("Mustang"); 
    expect(functions.sampleObjDict({model: "Miata", make: "Mazda"})).toBe("Miata");
});

// Size Function Test

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(99)).toBe("large");
    expect(functions.size(100)).toBe("extra large");
    expect(functions.size(2000000)).toBe("extra large");
});

// Even Number Function Test

test('isEven test', () => {
    expect(functions.isEven(1)).toBe('Odd Number');
    expect(functions.isEven(2)).toBe('Even Number');
});

// Tax Calculator Function Tests

test('Does the tax calculator work?', () => {
    expect(functions.taxCalculation(48535)).toBe(7280);
    expect(functions.taxCalculation(48536)).toBe(7280);
    expect(functions.taxCalculation(97069)).toBe(17229);
    expect(functions.taxCalculation(97070)).toBe(17230);
    expect(functions.taxCalculation(150473)).toBe(31115);
    expect(functions.taxCalculation(150474)).toBe(31115);
    expect(functions.taxCalculation(214368)).toBe(49645);
    expect(functions.taxCalculation(214369)).toBe(49645);
    expect(functions.taxCalculation(300000)).toBe(77904);
    expect(functions.taxCalculation(500000)).toBe(143904);
})
