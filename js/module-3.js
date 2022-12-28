const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

// const user = {
//     name: 'USER',
//     sayHello() {
//     console.log(` Hello i'm ${this.name}`);   
//     }
// }

// user.sayHello();

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      amount,
      type,
      id: Date.now(),
    };

    return transaction;
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  withdraw(amount) {
    if (this.balance < amount) {
      return console.log('Operation is not sisefull: cash is nan');
    } 
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
      this.balance -= amount;
    
    },
  
    getBalance() {
      alert(this.balance)
  }
  
};


account.deposit(10000);
// account.getBalance();
account.withdraw(1000);
// account.getBalance();
console.log(account);
