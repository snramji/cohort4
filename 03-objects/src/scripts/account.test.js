
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

    let newAcct3 = new ooStuff.Account("Savings", 1000);
    let newAcct4 = new ooStuff.Account("Chequing", 5000);
    
    newAcct3.deposit(100);
    newAcct4.deposit(500);

    // console.log(newAcct3.acctBalance());
    // console.log(newAcct4.acctBalance());
    
    expect (newAcct3.acctBalance()).toBe(1100);
    expect (newAcct4.acctBalance()).toBe(5500);

});

// Test withdraw and balance functions

test('Test the withdraw method', () => {

    let newAcct5 = new ooStuff.Account("Savings", 100);
    let newAcct6 = new ooStuff.Account("Chequing", 500);

    newAcct5.withdraw(200);
    newAcct6.withdraw(100);

    // console.log(newAcct5.acctBalance());
    // console.log(newAcct6.acctBalance());
    
    expect (newAcct5.acctBalance()).toBe(-100);
    expect (newAcct6.acctBalance()).toBe(400);

});

// Test account controls


test('Test the account array constructor', () => {
    const acctControl = new ooStuff.AcctControls ();
    
    // console.log(acctControl.acctArray);

    expect (acctControl.acctArray).toEqual([]);
});

test('Test the add account function', () => {
    const controllerTest1 = new ooStuff.AcctControls();
        
    expect(controllerTest1.addAcct("newAcct7", 500)).toEqual([{name: 'newAcct7', balance: 500}]);
        
    // console.log(controllerTest1.acctArray);
    
    expect(controllerTest1.addAcct("newAcct8", 1500)).toEqual([{name: 'newAcct7', balance: 500}, {name:"newAcct8", balance: 1500}]);
    
    // console.log(controllerTest1.acctArray);

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
    expect(controllerTest3.balance("newAcct8")).toBe(600);
    expect(controllerTest3.balance("newAcct9")).toBe(500);
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


