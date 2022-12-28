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
    transactions: [
        { amount: 10000, type: 'deposit', id: 1672249694281 },
        { amount: 1000, type: 'withdraw', id: 1672249694487 }
    ],

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
    },
    
    getTransitionDetails(id) {
        for (const transaction of this.transactions) {
            if (id === transaction.id) {
                console.log(transaction);
                return transaction;
                
        }
    }
},
  
    getTransactionTotal(type) {
        let total = 0;
        for (const transaction of this.transactions) {
            
        }
    }

};


account.deposit(10000);
// Flesh
setTimeout(() => {
account.withdraw(1000)
},200)
console.log(account);
account.getTransitionDetails(1672249694281);
