import oopFunctions from './account.js'

// Test the plumbing

// test('Plumbing test', () => {
//     console.log("Test the plumbing");
//     console.log(oopFunctions.plumbTest());

    // expect(oopFunctions.plumbTest(2, 3)).toBe(6);
    // expect(oopFunctions.plumbTest(100, 101)).toBe(10100);

// });

// Discovery about classes, methods, etc.


test('Test the class', () => {

    const larry = new Person("Larry", 29);
    const lorraine = new Person("Lorraine", 28);

    // larry.age = 29;
    // larry.name = "Larry";
    // lorraine.age = 28;
    // lorraine.name = "Lorraine";

    console.log(larry.sayHello());
    console.log(lorraine);
    
})

class Person {
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello there ${this.name}`;
    }
}