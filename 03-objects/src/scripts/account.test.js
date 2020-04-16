// import {Account, AccountControls}  from './account.js';
import Account from './account.js';

const newAcct1 = new Account("Savings", 100);
const newAcct2 = new Account("Chequing", 500);

//   Test account class

test('Test the account class', () => {

    console.log(newAcct1.name);
    console.log(newAcct2.balance);

    expect(newAcct1).toBeInstanceOf(Account);
    expect(newAcct1.name).toBe("Savings");
    expect(newAcct2.balance).toBe(500);
    
});

// Test deposit and balance methods

test('Test the deposit method', () => {
    
    newAcct1.deposit(50);
    newAcct2.deposit(200);

    console.log(newAcct1.balance);
    expect (newAcct1.balance).toBe(150);
    
    console.log(newAcct2.balance);
    expect (newAcct2.balance).toBe(700);

})

// Test withdraw and balance methods

test('Test the withdraw method', () => {

    newAcct1.withdraw(150);
    newAcct2.withdraw(100);

    console.log(newAcct1.balance);
    expect (newAcct1.balance).toBe(0);
    
    console.log(newAcct2.balance);
    expect (newAcct2.balance).toBe(600);

})

// Test account controls

// const acctControl = new AccountControls ();

// test('Test adding accounts to the array', () => {
//     expect (acctControl.accountArray).toEqual([]);
// })

