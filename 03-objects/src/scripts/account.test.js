
import ooStuff from './account.js';

//   Test account class

test('Test the account class', () => {

    let newAcct1 = new ooStuff.Account("Savings", 100);
    let newAcct2 = new ooStuff.Account("Chequing", 500);

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
    
    expect (newAcct3.acctBalance()).toBe(1100);
    expect (newAcct4.acctBalance()).toBe(5500);

});

// Test withdraw and balance functions

test('Test the withdraw method', () => {

    let newAcct5 = new ooStuff.Account("Savings", 100);
    let newAcct6 = new ooStuff.Account("Chequing", 500);

    newAcct5.withdraw(200);
    newAcct6.withdraw(100);
    
    expect (newAcct5.acctBalance()).toBe(-100);
    expect (newAcct6.acctBalance()).toBe(400);

});

// Test account controls


test('Test the account array constructor', () => {
    const controllerTest = new ooStuff.AcctControls ();

    expect (controllerTest.acctArray).toEqual([]);
});

test('Test the add account function', () => {
    const controllerTest1 = new ooStuff.AcctControls();
        
    expect(controllerTest1.addAcct("newAcct7", 500)).toEqual([{name: 'newAcct7', balance: 500}]);
       
    expect(controllerTest1.addAcct("newAcct8", 1500)).toEqual([{name: 'newAcct7', balance: 500}, {name:"newAcct8", balance: 1500}]);
    
});

test('Check the balance for individual accounts', () => {
    const controllerTest2 = new ooStuff.AcctControls();
    
    controllerTest2.addAcct("newAcct9", 100);
    controllerTest2.addAcct("newAcct10", 200);
        
    expect(controllerTest2.balanceForAcct("newAcct9")).toBe(100);
    expect(controllerTest2.balanceForAcct("newAcct10")).toBe(200);
});

test('Test to deposit into accounts', () => {
    const controllerTest3 = new ooStuff.AcctControls();

    controllerTest3.addAcct("newAcct11", 1000);
    expect(controllerTest3.balanceForAcct("newAcct11")).toBe(1000);
    
    controllerTest3.depositToAcct("newAcct11", 500);
    expect(controllerTest3.balanceForAcct("newAcct11")).toBe(1500);

});

test('Test to withdraw from accounts', () => {
    const controllerTest4 = new ooStuff.AcctControls();

    controllerTest4.addAcct("newAcct12", 250);
    controllerTest4.depositToAcct("newAcct12", 300)
    expect(controllerTest4.balanceForAcct("newAcct12")).toBe(550);
    
    controllerTest4.withdrawFromAcct("newAcct12", 50);
    expect(controllerTest4.balanceForAcct("newAcct12")).toBe(500);

});

test('Test to remove account', () => {
    const controllerTest5 = new ooStuff.AcctControls();
    
    controllerTest5.addAcct("newAcct13", 1000);
    expect(controllerTest5.balanceForAcct("newAcct13")).toBe(1000);

    controllerTest5.removeAcct("newAcct13");
    expect (controllerTest5.acctArray).toEqual([]);
})

test('Test for the total account balance', () => {
    const controllerTest6 = new ooStuff.AcctControls();
    
    controllerTest6.addAcct("newAcct14", 2000);
    controllerTest6.addAcct("newAcct15", 2500);
    controllerTest6.addAcct("newAcct15", 2500);
    controllerTest6.addAcct("newAcct16", 3000);
    
    // console.log(controllerTest6.acctArray);
    // console.log(controllerTest6.acctArray[1]);
    // console.log(controllerTest6.totalAcctBalance());
    
    expect(controllerTest6.totalAcctBalance()).toBe(10000);
});

test('Test for the lowest account balance', () => {
    const controllerTest7 = new ooStuff.AcctControls();
    
    controllerTest7.addAcct("newAcct17", 2500);
    controllerTest7.addAcct("newAcct18", 2000);
    controllerTest7.addAcct("newAcct19", 3000);
    
    expect(controllerTest7.lowestAcctBalance()).toBe("newAcct18: $2000");
    
});

test('Test for the highest account balance', () => {
    const controllerTest8 = new ooStuff.AcctControls();
    
    controllerTest8.addAcct("newAcct20", 2500);
    controllerTest8.addAcct("newAcct21", 2000);
    controllerTest8.addAcct("newAcct22", 3000);
    
    expect(controllerTest8.highestAcctBalance()).toBe("newAcct22: $3000");
    
});


