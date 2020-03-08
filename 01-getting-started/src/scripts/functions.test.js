import functions from './functions'

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

// Calculator Function Tests

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does that subtract function work?', () => {
    expect(functions.subtract(2,1)).toBe(1);
    expect(functions.subtract(200,100)).toBe(100);
});

test('Does that multiply function work?', () => {
    expect(functions.multiply(2,3)).toBe(6);
    expect(functions.multiply(50,100)).toBe(5000);
});

test('Does that divide function work?', () => {
    expect(functions.divide(4,2)).toBe(2);
    expect(functions.divide(50,0)).toBe(Infinity);
});

// Tax Calculator Function Tests

test('Does the tax calculator work?', () => {
    expect(functions.taxCalc(48535)).toBe(7280);
    expect(functions.taxCalc(48536)).toBe(7280);
    expect(functions.taxCalc(97069)).toBe(17229);
    expect(functions.taxCalc(97070)).toBe(17230);
    expect(functions.taxCalc(150473)).toBe(31115);
    expect(functions.taxCalc(150474)).toBe(31115);
    expect(functions.taxCalc(214368)).toBe(49645);
    expect(functions.taxCalc(214369)).toBe(49645);
    expect(functions.taxCalc(300000)).toBe(77904);
    expect(functions.taxCalc(500000)).toBe(143904);
})
