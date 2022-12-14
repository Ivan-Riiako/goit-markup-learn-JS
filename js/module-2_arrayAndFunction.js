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

// // // VAR 1-1
// //     if (login === findLogin) {
// //         message = `Login ${login} is find`;
// //         break;
// //     }
// // // // VAR 2-1
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
// const numbers = [16, 24, 32, -5, 67, 96, 37, 98, 44, 55, 44, 33, 22, 73, 13, '1' + 1];
// // // VAR 1
// // console.log(Math.min(...numbers));
// // console.log(Math.max(...numbers));
// // VAR 2
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

// use abstraction
// const string = 'my notebook with WI-FI 2     ';
// console.log(string);

// // VAR 1
// let normalaizeString = string.toLowerCase().trim();
// console.log(normalaizeString);
// let stringArr = normalaizeString.split(' ');
// console.log(stringArr);
// let newString = stringArr.join('-');
// console.log(newString);
// // VAR 2
// let trueString = string.toLowerCase().trim().split(' ').join('-');
// console.log(trueString)

// // add arr , Concat
// const array1 = [13, 56, 78, 90, 1];
// const array2 = [12, 43, 76, 32];
// let total = 0;

// console.log(array1 + array2);      // 13, 56, 78, 90, 112, 43, 76, 32;
// console.log(`${array1},${array2}`);// 13, 56, 78, 90, 1, 12, 43, 76, 32;

// const addArray = array1.concat(array2);
// console.log(addArray);            // [13, 56, 78, 90, 1, 12, 43, 76, 32];

// for (const arr of addArray) {
//     total += arr;
// }
//     console.log(`all  of array sum:${total}`);

// // Delete-card with splice
// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
// console.table(cards);

// const cardToRemove = "card-5";
// console.table(`Delet: ${cardToRemove}`);

// const index = cards.indexOf(cardToRemove);
// console.log(`index of ${cardToRemove} is ${index}`);

// cards.splice(index, 1)
// console.table(cards);

// // add card
// const cardToInsert = 'I will vdul';
// const toInsertIndex = 3;
// cards.splice(toInsertIndex, 0, cardToInsert);
// console.table(cards);


// // del and add
// const cardToUppdate = 'card -100';

// cards.splice(3, 1, cardToUppdate);
// console.table(cards);


// const value = '8 11';
// const numbers = value.split(' ');
// console.log(numbers);
// const a = Number(numbers[0]);
// const b = Number(numbers[1]);
// let result = a * b;
// console.log(result);

// const names = 'Alex,Bob,Nadia,Vica,Chisgishan,name548,q1q1qq1';
// const phones = '2534545454343,1433,tell,1545,9873,5634,5654-53633';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');
// // console.table(namesArr);
// // console.table(phonesArr);
// for (let i = 0; i < phonesArr.length; i += 1) {
//   const name = namesArr[i];
//   const phone = phonesArr[i];
//   console.log(`${name}: ${phone}`);
// }

// const string = ' 324324234 a b c 111 d e y 5465346 '
// const arrString = string.trim().split(' ');
// console.log(arrString);
// arrString.shift();
// arrString.pop();
// const normalaizeString = arrString.join(' ');
// console.log(normalaizeString);

// // revers
// const string = ' 1 2 3 4 5 6 7 8 9 ';
// console.log(string);
// // // VAR 1
// // const stringArr = string.trim().split(' ');
// // console.log(stringArr);
// // let inverseString = '';
// // for (let i = stringArr.length - 1; i >= 0; i -= 1){
// //     inverseString += stringArr[i];
// // }
// // inverseString = inverseString.split('').join(' ');

// // VAR 2
// // const inverseString = stringArr.reverse().join(' ');
// const inverseString = string.split(' ').reverse().join(' ');
// console.log(inverseString);


