
// let weight = '190,9';
// let height = "1.5";

// if (weight.includes(',')) {
//     weight = weight.replace(',','.');
// }
// if (height.includes(',')) {
//   height = height.replace(',', '.');
// }


// const bmi = parseFloat(weight) / Math.pow(parseFloat(height), 2);
// // const bmi = parseFloat(weight) / (parseFloat(height**2));

// console.log(
// `weight:${weight}
// height:${height}`);
// console.log(`${bmi.toFixed(1)}`)



// // check spam
// function checkForSpam(message) {
//   let result;
//     result =
//     message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//   return result;
// }
// let maill = checkForSpam("feev  SAle");
// console.log(maill)



// // check for null and undefined
// const incomingValue = undefined;// null;
// const defaultValue = 404;// all others
// let value = incomingValue ?? defaultValue;
// console.log(value);// 404 , if incomingValue = all others; value = all others

// // clock
// const totalMinute = 1440;// 24 hours
// let hours =( totalMinute / 60).toFixed(0);
// let minute = totalMinute % 60;
// if (minute < 10) {
//   minute= `0${minute}`
// }
// if (hours < 10) {
//  hours= `0${hours}`;
// }
// const clock = `${hours}:${minute}`;

// console.log(clock);


// add "/"
let link = "https://ivan-riiako.github.io/goit-markup-learn-JS";

if (!link.endsWith('/')) {     //  ! save time
   console.log(link + '/');
    
} else {
   console.log(link);
    
}