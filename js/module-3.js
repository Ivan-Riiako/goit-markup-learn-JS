// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// const user = {
//     name: 'USER',
//     sayHello() {
//     console.log(` Hello i'm ${this.name}`);
//     }
// }

// user.sayHello();

// const account = {
//   balance: 0,
//   transactions: [
//     { amount: 1000, type: 'deposit', id: 1672249694281 },
//     { amount: 1000, type: 'withdraw', id: 1672249694487 },
//   ],

//   createTransaction(amount, type) {
//     const transaction = {
//       amount,
//       type,
//       id: Date.now(),
//     };

//     return transaction;
//   },

//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance += amount;
//   },

//   withdraw(amount) {
//     if (this.balance < amount) {
//       return console.log('Operation is not sisefull: cash is nan');
//     }
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },

//   getBalance() {
//     alert(this.balance);
//   },

//   getTransitionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         console.log(transaction);
//         return transaction;
//       }
//     }
//   },

//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// console.log(account);
// account.deposit(10000);
// account.withdraw(2000);

// // Flesh
// setTimeout(() => {
// account.withdraw(1000);
// }, 200)

// console.log(account);
// account.getTransitionDetails(1672249694281);
// account.getTransitionDetails(1672249694487);

// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     console.table(this.items)
//     const { items } = this;

//     for (const item of items) {
//       console.log(`this product is find`);
//       if (item.name === product.name) {
        
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];
//       if (productName === item.name) {
//         items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price } of items) {
//       total += price;
//     }

//     return total;
//   },
// };

// cart.add({ name: 'tomato', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberry', price: 160 });
// cart.add({ name: 'anchouss', price: 70 });
// cart.add({ name: 'tomato', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberry', price: 160 });
// cart.add({ name: 'anchouss', price: 70 });

// cart.remove('lemon');
// console.table(cart.getItems());
// console.log(cart.countTotalPrice());
function calculateTotal(number) {
  // Change code below this line
  let sumNumber = 0;
  for (let i = 1; i <= number; i += 1) {
    sumNumber += i;
  }

  return sumNumber;
  // Change code above this line
}
console.log(calculateTotal( 3));