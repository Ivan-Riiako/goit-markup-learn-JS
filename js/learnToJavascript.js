// 'use strict'; // не нужем когда при подключении скрипта пишем type="module"
let age = 1 / 2;
const message = `'use strict' - не нужен когда при подключении скрипта пишем type="module"`;
console.log(`sum letters of (${message})=  ${message.length}`); 
// box with colors
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
console.log(`number of colors -- ${colors.length}`);
// -1 what why
const max = colors.length - 1;
const min = 0;
// randomaizer
const index = Math.round(Math.random() * (max - min) + min);

// color for BODY
const colorBody = colors[index];

console.log(`COLOR for Body : ${colorBody}`);
console.log(`Namber of colors : ${index}`);

document.body.style.backgroundColor = colorBody;

// color for class=hero-sextion
const colorSection = colors[index - 1];

console.log(`COLOR for Body : ${colorSection}`);
console.log(`Namber of colors : ${index - 1}`);

document.querySelector('.hero-section').style.backgroundColor = colorSection;


// задача с курьером 
let option = 0;
let alertMessage = '';

switch (option) {
  case 1:
    alertMessage = 'Вы можете забрать товар завтра с 12 в нашем офисе!';
    console.log(alertMessage);
    break;
  
  case 2:
    alertMessage = 'Курьер доставит заказ завтра с 9-00 до 18-00';
    console.log(alertMessage);
    break;
  
  case 3:
    alertMessage = 'Посылка будет отправоенна сеголня!';
    console.log(alertMessage);
    break;
  default: 
    alertMessage = 'Вам перзвонит менеджер';
}
console.log(alertMessage);


for (let i = 1; i < 30; i += 2){
  console.log(i);
  i += 0.6;
  i = Number.parseInt(i);
}
