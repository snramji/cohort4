import functions from './syntax'

test('Is this a number?', () => {
    expect(functions.isNumber(1)).toBe(true); 
    expect(functions.isNumber("A")).toBe(false);
});

test('Is this a string?', () => {
    expect(functions.isString("A")).toBe(true);
    expect(functions.isString(1)).toBe(false);
});

test('Is this a boolean result?', () => {
    expect(functions.isBoolean(1, 1)).toBe(true);
    expect(functions.isBoolean(1, 2)).toBe(false);
})