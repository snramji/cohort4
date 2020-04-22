
import ooStuff from './account.js';

//   Test account class

test('Test the account class', () => {

    let newAcct1 = new ooStuff.Account("Savings", 100);
    let newAcct2 = new ooStuff.Account("Chequing", 500);

    // console.log(newAcct1.name);
    // console.log(newAcct2.balance);

    expect(newAcct1).toBeInstanceOf(ooStuff.Account);
    expect(newAcct1.name).toBe("Savings");
    expect(newAcct2.balance).toBe(500);
    
});

// Test deposit and balance functions

test('Test the deposit method', () => {

    let newAcct1 = new ooStuff.Account("Savings", 100);
    let newAcct2 = new ooStuff.Account("Chequing", 500);
    
    newAcct1.deposit(100);
    newAcct2.deposit(500);

    // console.log(newAcct1.balance);
    expect (newAcct1.balance).toBe(200);
    
    // console.log(newAcct2.balance);
    expect (newAcct2.balance).toBe(1000);

});

// Test withdraw and balance functions

test('Test the withdraw method', () => {

    let newAcct1 = new ooStuff.Account("Savings", 100);
    let newAcct2 = new ooStuff.Account("Chequing", 500);

    newAcct1.withdraw(200);
    newAcct2.withdraw(100);

    // console.log(newAcct1.balance);
    expect (newAcct1.balance).toBe(-100);
    
    // console.log(newAcct2.balance);
    expect (newAcct2.balance).toBe(400);

});

// Test account controls


test('Test adding accounts to the array', () => {
    const acctControl = new ooStuff.AcctControls ();
    expect (acctControl.acctArray).toEqual([]);
});

test('Test the add account function', () => {
    const controllerTest1 = new ooStuff.AcctControls();
    expect(controllerTest1.addAcct("newAcct3", 500)).toEqual([{name: 'newAcct3', balance: 500}]);
    // console.log(controllerTest1.acctArray);
    expect(controllerTest1.addAcct("newAcct4", 1500)).toEqual([{name: 'newAcct3', balance: 500}, {name:"newAcct4", balance: 1500}]);
    // console.log(controllerTest1.acctArray);
});

test('Test the total account balance method', () => {
    const controllerTest2 = new ooStuff.AcctControls();
    controllerTest2.addAcct("newAcct5", 2000);
    controllerTest2.addAcct("newAcct6", 2500);
    controllerTest2.addAcct("newAcct6", 2500);
    controllerTest2.addAcct("newAcct7", 3000);
    // console.log(controllerTest2.acctArray);
    // console.log(controllerTest2.acctArray[1]);
    // console.log(controllerTest2.totalAcctBalance());
    expect(controllerTest2.totalAcctBalance()).toBe(10000);
});

test('Test the individual account total balance method', () => {
    const controllerTest3 = new ooStuff.AcctControls();
    controllerTest3.addAcct("newAcct8", 100);
    controllerTest3.addAcct("newAcct8", 500);
    controllerTest3.addAcct("newAcct9", 200);
    controllerTest3.addAcct("newAcct9", 300);
    console.log(controllerTest3.acctArray);
    console.log(controllerTest3.acctArray[1].name);
    console.log(controllerTest3.acctArray[2].balance);
    expect(controllerTest3.balance("newAcct8")).toBe(4500);
    expect(controllerTest3.balance("newAcct9")).toBe(5500);
})

