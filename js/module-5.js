const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); 
console.log(animal.isPrototypeOf(dog)); 
