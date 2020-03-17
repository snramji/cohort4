import dictionaries from './dictionaries.js';

test('Does the dictionary add object function work?', () => {
    expect(dictionaries.dictObjGet('on')).toBeFalsy();
    
    dictionaries.dictObjAdd('on', "Ontario");

    expect(dictionaries.dictObjGet('on')).toBe("Ontario");
});