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

const cart = [32, 23, 46, 46, 46, 57, 65, 67, 87, 91, 21, 46, 17, 120];
let totalCart = 0;

// // var 1
// for (let i = 0; i < cart.length; i += 1){
//     totalCart += cart[i];
// }

// var 2
for (const value of cart) {
    totalCart += value;
}
console.log(`Total: ${totalCart}`);

for (let i = 0; i <= cart.length; i += 1) {
    cart[i] *= 1.1;
   
console.log(cart[i]);

}
console.log(cart);
