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

    balanceForAcct(name) {
        let index = this.acctArray.findIndex(acctFinder => acctFinder.name === name);
        return this.acctArray[index].acctBalance();
    }

    depositToAcct(name, amount) {
        let index = this.acctArray.findIndex(acctFinder => acctFinder.name === name);
        this.acctArray[index].deposit(amount);
    }

    withdrawFromAcct(name, amount){
        let index = this.acctArray.findIndex(acctFinder => acctFinder.name === name);
        this.acctArray[index].withdraw(amount);
    }

    removeAcct(acctObject) {
        let index = this.acctArray.findIndex(acctFinder => acctFinder.name === acctObject);
        this.acctArray.splice(index, 1);
    }

    totalAcctBalance() {
        let totalBalance = 0;
        for (let i = 0; i < this.acctArray.length; i++) {
            totalBalance += Number(this.acctArray[i].balance);
        }
        return totalBalance;
    }

    lowestAcctBalance() {
        let lowestAcctBal = Number.POSITIVE_INFINITY;
        let lowestAcctName;
        for (let i = 0; i < this.acctArray.length; i++) {
            let lowBalance = Number(this.acctArray[i].balance);
            let acctName = this.acctArray[i].name;
            if (lowBalance < lowestAcctBal) {
                lowestAcctBal = lowBalance;
                lowestAcctName = acctName;
            }
        }
        return `${lowestAcctName}: $${lowestAcctBal}`;
    }

    highestAcctBalance() {
        let highestAcctBal = 0;
        let highestAcctName;
        for (let i = 0; i < this.acctArray.length; i++) {
            let highBalance = Number(this.acctArray[i].balance);
            let acctName = this.acctArray[i].name;
            if (highestAcctBal < highBalance) {
                highestAcctBal = highBalance;
                highestAcctName = acctName;
            }
        }
        return `${highestAcctName}: $${highestAcctBal}`;
    } 

}

export default { Account, AcctControls };
