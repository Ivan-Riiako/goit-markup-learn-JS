const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); 
console.log(animal.isPrototypeOf(dog)); 
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.name); // 'Манго'

console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.legs);  // true

