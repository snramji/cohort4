const oopFunctions = {

// Test the plumbing

    plumbTest() {
        return "plumbing test";
    }

}


// Unit testing

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello there ${this.name}`;
    }

    birthday() {
        this.age++;
    }


}


export default {oopFunctions, Person};