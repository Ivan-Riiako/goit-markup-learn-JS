'use strict';
let age = 1 / 2;
const message = "Welcome to Bhhhhhhhhhhhhhhhuuuuuuuuuuuuuuuuuuuuuuahamas!";
console.log(message.length); // 19

const colors = [
  'tomato',
  'teal',
  'orange',
  'skyblue',
  'deeppink',
  'Fuchsia',
  'Olive',
  'SlateGray',
  'Crimson',
  'YellowGreen',
  'Purple',
  'Lime',
];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
console.log(index);
const color = colors[index];
const colorSection = colors[index- 1];

console.log(color);
document.body.style.backgroundColor = color;

// Change backgroundColor hero-section  
document.querySelector('.hero-section').style.backgroundColor = colorSection;



