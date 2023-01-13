// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log('Logging value: ', value);
// }

// function repeat(n, action) {
//   for (let i = 0; i <= n; i += 1) {
//     action(i);
//   }
// }
// repeat(3, printValue);
// repeat(8, prettyPrint);


// let i = 0;

// function createProduct(partialProduct, callback) {
//     i += 1;
//     const object = {
//         id:i,
//     ...partialProduct
//     }
//     callback(object);
// };

// createProduct({
//     name: 'Strawberry',
//     price: 105,
//     quantity: 3,
// }, logProduct);

// function logProduct(product) {
//     console.log(product);
// }
// function logTotalPrice({ price, quantity }) {
//     console.log(price * quantity);
//     return price * quantity;
// }

// createProduct(
//   {
//     name: 'Apple',
//     price:58,
//     quantity:8,
//   },
//   logTotalPrice
// );



// let TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 3400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > this.balance) {
//       onError(`Невозможно снять :${amount}, на балансе ${this.balance}`);
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError(`Сумаа снятия: ${amount}, больше чем лимит транзакций- ${TRANSACTION_LIMIT}`);
//     } else {
//         this.balance -= amount;
//         onSuccess(`Операция успешна.Сняли: ${amount}. На счету: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
      
//       if (amount <= 0){
//         onError(`Невозможно зачислить :${amount}`);
//       } else if (amount > TRANSACTION_LIMIT) {
//         onError(`Сумаа зачисления: ${amount}, больше чем лимит транзакций - ${TRANSACTION_LIMIT}`);
//       } else {
//         this.account += amount;
//         onSuccess(`Операция успешна.Зачислено: ${amount}. На счету: ${this.balance}`);
//       }
//   },
// };



// function hendleSuccess(message) {
//     console.log(`Success: ${message}`);
// }

// function hendleError(message) {
//     console.log(`Error: ${message}`);
// };


// account.withdraw(300, hendleSuccess, hendleError);
// account.withdraw(900, hendleSuccess, hendleError);
// account.withdraw(3000, hendleSuccess, hendleError);
// account.withdraw(1300, hendleSuccess, hendleError);
// account.withdraw(302, hendleSuccess, hendleError);
// account.withdraw(199, hendleSuccess, hendleError);

// account.deposit(300, hendleSuccess, hendleError);
// account.deposit(900, hendleSuccess, hendleError);
// account.deposit(3000, hendleSuccess, hendleError);
// account.deposit(1300, hendleSuccess, hendleError);
// account.deposit(302, hendleSuccess, hendleError);
// account.deposit(199, hendleSuccess, hendleError);


// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]


