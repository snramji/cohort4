import ooStuff from './account.js'

// Test the plumbing

// test('Plumbing test', () => {
//     console.log("Test the plumbing");
//     console.log(oopFunctions.plumbTest());

    // expect(oopFunctions.plumbTest(2, 3)).toBe(6);
    // expect(oopFunctions.plumbTest(100, 101)).toBe(10100);

// });

// Discovery about classes, methods, etc.


// test('Test the class', () => {

//     const larry = new Person("Larry", 29);
//     const lorraine = new Person("Lorraine", 28);

//     // larry.age = 29;
//     // larry.name = "Larry";
//     // lorraine.age = 28;
//     // lorraine.name = "Lorraine";

//     console.log(larry.sayHello());
//     console.log(lorraine);
    
// })

// Moved to account.js

// class Person {
    
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHello() {
//         return `Hello there ${this.name}`;
//     }
// }

// Unit testing oop

test('Test the oop', () => {

    // console.log(ooStuff);
    // console.log(ooStuff.oopFunctions.plumbTest());
    // console.log(larry);   

    const larry = new ooStuff.Person("Larry", 29);
    expect(larry.name).toBe("Larry");
    expect(larry.age).toBe(29);


});

test('Test oop birthday', () => {
    const family = [];
    
    family.push(new ooStuff.Person("Larry", 29));
    family.push(new ooStuff.Person("Lorraine", 28));

    // console.log(family);
    // console.log(family[0]);
    // console.log(family[1]);

    expect(family[0].name).toBe("Larry");
    expect(family[0].age).toBe(29);

    expect(family[1].name).toBe("Lorraine");
    expect(family[1].age).toBe(28);

    console.log("Before birthday, " + family[0].name + "'s age is: " + family[0].age);

    family[0].birthday();
    expect(family[0].age).toBe(30);

    console.log("After birthday, " + family[0].name + "'s age is: " + family[0].age);

    family[1].birthday();
    expect(family[1].age).toBe(29);

  });