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


let i = 0;

function createProduct(partialProduct, callback) {
    const object = {
        id:Date.now(),
    ...partialProduct
    }
    callback(object);
};

createProduct({
    name: 'Strawberry',
    price: 105,
    quantity: 3,
}, logProduct);

function logProduct(product) {
    console.log(product);
}
function logTotalPrice(product) {
    console.log(product);
}

createProduct(
  {
    name: 'Vanilla',
    price: 358,
    quantity: 9,
  },
  logTotalPrice
);