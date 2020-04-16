// Account class

class Account {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += Number(amount);
        return this.balance;
    }

    withdraw(amount) {
        this.balance -= Number(amount);
        return this.balance;
    }

    balance() {
        return this.balance;
    }

}

// class AccountControls {
//     constructor() {
//         // this.accountArray = [];
//     }
// }

// export default {Account, AccountControls};
export default {Account};