
import ooStuff from './account.js';

//   Test account class

test('Test the account class', () => {

    const newAcct1 = new ooStuff.Account("Savings", 100);
    const newAcct2 = new ooStuff.Account("Chequing", 500);

    console.log(newAcct1.name);
    console.log(newAcct2.balance);

    expect(newAcct1).toBeInstanceOf(ooStuff.Account);
    expect(newAcct1.name).toBe("Savings");
    expect(newAcct2.balance).toBe(500);
    
});

// Test deposit and balance methods

test('Test the deposit method', () => {

    const newAcct1 = new ooStuff.Account("Savings", 100);
    const newAcct2 = new ooStuff.Account("Chequing", 500);
    
    newAcct1.deposit(100);
    newAcct2.deposit(500);

    console.log(newAcct1.balance);
    expect (newAcct1.balance).toBe(200);
    
    console.log(newAcct2.balance);
    expect (newAcct2.balance).toBe(1000);

})

// Test withdraw and balance methods

test('Test the withdraw method', () => {

    const newAcct1 = new ooStuff.Account("Savings", 100);
    const newAcct2 = new ooStuff.Account("Chequing", 500);

    newAcct1.withdraw(200);
    newAcct2.withdraw(100);

    console.log(newAcct1.balance);
    expect (newAcct1.balance).toBe(-100);
    
    console.log(newAcct2.balance);
    expect (newAcct2.balance).toBe(400);

})

// Test account controls


test('Test adding accounts to the array', () => {
    const acctControl = new ooStuff.AccountControls ();
    expect (acctControl.accountArray).toEqual([]);
})

