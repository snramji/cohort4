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

class AcctControls {
    constructor() {
        this.acctArray = [];
    }

    addAcct(name, balance) {
        this.acctArray.push(new Account(name, balance));
        return this.acctArray;
    }

    acctBalance(name) {
        let sortAcctArray = this.acctArray
        sortAcctArray.sort();
        for (let i = 0; i < this.acctArray.length; i++) {
            if(this.acctArray.sort())
            
        }
        return totalBalance;
    }

    totalAcctBalance() {
        let totalBalance = 0;
        for (let i = 0; i < this.acctArray.length; i++) {
            totalBalance += Number(this.acctArray[i].balance);
        }
        return totalBalance;
    }


}

export default { Account, AcctControls };
