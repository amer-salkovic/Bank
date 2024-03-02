class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.initialBalance = initialBalance;
    }

    deposit(amount) {
        this.initialBalance += amount;
    }

    withdraw(amount) {
        this.initialBalance -= amount;
    }

    displayBalance() {
        let balanceElement = document.querySelector("#balance");
        balanceElement.innerHTML = `<h2 id="balance">Balance on your account: ${this.initialBalance}</h2>`;
        console.log(`Your balance is ${this.initialBalance}`);
    }
}

let account = new BankAccount(1243432, 1000);
console.log(account);

account.deposit(5000);
account.displayBalance();

function withdrawal() {
    let withdrawalInput = document.querySelector("#withdrawal");
    let button = document.querySelector("#button");
    let balanceElement = document.querySelector("#balance");

    button.addEventListener("click", () => {
        let amount = parseFloat(withdrawalInput.value);
        account.withdraw(amount);
        balanceElement.innerHTML = `<h2 id="balance">Balance on your account: ${account.initialBalance}</h2>`;
    });
}

withdrawal();

function deposit() {
    let depositInput = document.querySelector("#deposit");
    let button = document.querySelector("#button2");
    let balanceElement = document.querySelector("#balance");

    button.addEventListener("click", () => {
        let amount = parseFloat(depositInput.value);
        account.deposit(amount);
        balanceElement.innerHTML = `<h2 id="balance">Balance on your account: ${account.initialBalance}</h2>`;
    });
}

deposit();
