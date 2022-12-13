// const friends = ['friend', 'friend', 'friend', 'friend', 'friend', 'friend', 'friend', 'friend', 'friend'];
// console.table(friends);

// const lastIndexFriends = friends.length - 1;
// console.log(lastIndexFriends);

// for (let i = 0; i <= lastIndexFriends; i += 1){
//     friends[i] += `-${i+1}`;
//     console.log(friends[i]);
// }
// // without anaviable
// const clients = [
//   'client',
//   'client',
//   'client',
// ];
// for (const client of clients) {
//     console.log(client);
// }

// const cart = [32, 23, 46, 46, 46, 57, 65, 67, 87, 91, 21, 46, 17, 120];
// let totalCart = 0;

// // var 1
// for (let i = 0; i < cart.length; i += 1){
//     totalCart += cart[i];
// }

// var 2
// for (const value of cart) {
//     totalCart += value;
// }
// console.log(`Total: ${totalCart}`);


// const cart = [32, 23, 46, 46, 46, 57, 65, 67, 87, 91, 21, 46, 17, 120];
// let totalCart = 0;
// for (let i = 0; i < cart.length; i += 1) {
// // var 1
// cart[i] *= 1.1;
// cart[i] = cart[i].toFixed(2);
// var 2
//     cart[i] = Math.round(cart[i] ** 1.1);
//     console.log(cart[i]);
// }
// console.log(cart);


// const number = [1, 2, 3, 5, 67, 98, 3, 98, 44, 55];
// let total = 0;
// for (const value of number) {
//   //   // Var 1
//   //   if (value % 2 === 0) {
//   //     console.log(` even number: ${value}`);
//   //     total += value;
//   //   }
    
//   // var2
//     if (value % 2 !== 0) {
//         continue
//     }
//       total += value;
// }

// console.log(`Sum of even numbers: ${total}`)

// // find Login
// const logins = ['fsdfdsf', 'fsfesfesf', 'apple', 'wood', 'freen'];
// const findLogin = 'apple';

// // VAR 1
// // let message = 'Login is not find';
// // for (const login of logins) {
// //     console.log(`Login: ${login}`)
// //     console.log(`login === findLogin :  ${login === findLogin}`);
    
// // // VAR 1.1
// //     if (login === findLogin) {
// //         message = `Login ${login} is find`;
// //         break;
// //     }
// // // // VAR 2.1
// // //     if (login !== findLogin) {
// // //        continue
// // //     }
// // //      message = `Login ${login} is find`;
// // //         break;
// // }

// // VAR 2

// let message = logins.includes(findLogin)
//   ? `Login ${findLogin}  is find`
//   : `Login is not find`;
// console.log(message);

// // find min-max number
// const numbers = [16, 24, 32, 5, 67, 98, 3447, 98, 44, 55, 44, 33, 22, 73,13,'1'+1];

// let smallestNumber = numbers[0];
// let bigestNumber = numbers[0];

// for (const value of numbers) {
//     if (value < smallestNumber) {
//       smallestNumber = value;
//     }
// }

// for (const value of numbers) {
//   if (value > bigestNumber) {
//     bigestNumber = value;
//   }
// }

// console.log(`Smallest number: ${smallestNumber}`);
// console.log(`Bigest number: ${bigestNumber}`);

// arr in string   join
// const stringArr = ['Polly', 'have', 'a', 'big', 'shot'];
  // var 1
// let string = ''
// for (let i = 0; i < stringArr.length; i += 1){
//     string += stringArr[i] + ',';
// }
// string = string.slice(0, string.length - 1);

  // var 2
// let string = stringArr.join(',');

// console.log(string);

// // srting in arr   split
// const stringJs = 'JavaScript';
// console.log(stringJs);
// const letters = stringJs.split('');
// console.log(letters);

// let inverseStringJs = '';

// for (const letter of letters) {
// //   // var 1
// //   if (letter === letter.toUpperCase()) {
// //     inverseStringJs += letter.toLowerCase();
// //   } else {
// //     inverseStringJs += letter.toUpperCase();
// //   }
//   // var 2
//     const isEqual = letter === letter.toUpperCase();
//     inverseStringJs += isEqual ? letter.toLowerCase() : letter.toUpperCase();
//         // console.log(letter);
//         // console.log(inverseStringJs);
// }

//     console.log(`Invwerse JavaScript - ${inverseStringJs}`);




