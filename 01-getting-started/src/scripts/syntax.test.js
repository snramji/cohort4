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
})