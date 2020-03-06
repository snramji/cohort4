import functions from './daily'

test('Convert to Farenheit', () => {
    expect(functions.convertToFarenheit(0)).toBe(32);
    expect(functions.convertToFarenheit(30)).toBe(86);
});