// Account class

class Account {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amtDeposit) {
        this.balance += Number(amtDeposit);
        return this.balance;
    }

    withdraw(amtWithdraw) {
        this.balance -= Number(amtWithdraw);
        return this.balance;
    }

    acctBalance() {
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

    balance(name) {
        let index = this.acctArray.findIndex(acctFinder => acctFinder.name === name);
        return this.acctArray[index].balance;
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
