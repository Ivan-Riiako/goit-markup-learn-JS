
// const message = `'use strict' - можно не писать , при подключении скрипта пишем type="module" и script будет в строгом режиме`;
// console.log(`sum letters of (${message}) =  ${message.length}`);

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
// console.log(`number of colors -- ${colors.length}`);
// -1 what why
const max = colors.length - 1;
const min = 0;
// randomaizer
const index = Math.round(Math.random() * (max - min) + min);

// color for BODY
const colorBody = colors[index];

// console.log(`COLOR for Body : ${colorBody}`);
// console.log(`Namber of colors : ${index}`);
document.body.style.backgroundColor = colorBody;

// color for class=hero-sextion
const colorSection = colors[index - 1];

// console.log(`COLOR for Body : ${colorSection}`);
// console.log(`Namber of colors : ${index - 1}`);
document.querySelector('.hero-section').style.backgroundColor = colorSection;

// задача с курьером
// let option = 0;
// let alertMessage = '';

// switch (option) {
//   case 1:
//     alertMessage = 'Вы можете забрать товар завтра с 12 в нашем офисе!';
//     console.log(alertMessage);
//     break;

//   case 2:
//     alertMessage = 'Курьер доставит заказ завтра с 9-00 до 18-00';
//     console.log(alertMessage);
//     break;

//   case 3:
//     alertMessage = 'Посылка будет отправоенна сеголня!';
//     console.log(alertMessage);
//     break;
//   default:
//     alertMessage = 'Вам перзвонит менеджер';
// }
// console.log(alertMessage);

// loop
// for (let i = 1; i < 30; i += 1){
//   console.log(i);
// }

// задачас с зарплатами для работяг
// const employees = 9;
// const minSalary = 600;
// const maxSalary = 3000;
// console.log(`сотрудники: ${employees}  `);

// let totalSalary = 0;

// for (let i = 0; i < employees; i += 1){
//   let randomSalary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
// console.log(`Зарплата рабочего № ${i+1} : ${randomSalary} shekel`);
//   totalSalary += randomSalary;
// }
// console.log(`Сумма всех зарплат: ${totalSalary}  `);

// посчет только чисел которые делятся на 2
// const minNumber = 10;
// const maxNumber = 30;
// let total = 0;

// for (let i = minNumber; i < maxNumber; i += 1) {

//   // Пропускаем если остаток от деления не 0

//   if (i % 2 !== 0) {
//     console.log(`Число № ${i - minNumber + 1}   не четное ${i}`);
//     continue;
//   }
//   console.log(`Число № ${i - minNumber + 1}  четное ${i}`);
//   // сумируем все четные цифры

//   total += i;
// }
// console.log(`Sum of even numbers : ${total}`);


// Script покупки в магазе

// let balance = 10000;
// const payment = 2000;

// console.log(`Общая сума заказов ${payment} кредитов. Проверяем количество доступных средств на счету`)
// if (payment <= balance) {
// balance -= payment;
// console.log('Сompleted successfully');
// console.log(`На счету осталось ${balance} кредитов!`);
// }
// else {
//   console.log('Warning!');
//   console.log(`На счету недостаточно средств для проведения операции!`);
// }
// console.log('Операция завершена');

// Script покупка с дисконтом

const totalSpent = 1000;
let payment = 500;
let discount = 0;

if (100 <= totalSpent && 1000 > totalSpent) {
  discount += 0.02;
  console.log(`Поздравляем, бронзовый партнер, ваша скидка ${discount * 100}%`);

} else if (1000 <= totalSpent && 5000 >= totalSpent) {
  discount += 0.05;
  console.log(`Поздравляем, серебрянный партнер, ваша скидка ${discount * 100}%`);

} else if (5000 < totalSpent) {
  discount += 0.1;
  console.log(`Поздравляем, золотой партнер, ваша скидка ${discount * 100}%`);

} else {
  console.log("Не партнер , скидка 0%");
}
  payment -= payment * discount;

console.log(`Заказ на суму ${payment} со скидкой ${discount * 100}% оформлен`);
