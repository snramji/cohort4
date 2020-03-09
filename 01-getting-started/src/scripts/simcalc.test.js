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