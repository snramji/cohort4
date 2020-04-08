import functions from './account.js'

// Test the plumbing

test('Plumbing test', () => {
    expect(functions.plumbTest(2, 3)).toBe(6);
    expect(functions.plumbTest(100, 101)).toBe(10100);
});

// Test Constructor