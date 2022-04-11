"use strict";

// const options = {
//   name: "Test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function () {
//     console.log("Test");
//   },
// };

// options.makeTest();

// const { border, bg } = options.colors;

// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Items ${i}, have ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Items ${key}, have ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

const arr = [1, 21, 35, 4, 5, 6];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} in ${arr}`);
});

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (let value of arr) {
  console.log(value);
}

const str = prompt("=>", "");

const products = str.split(", ");
products.sort();
console.log(products.join("; "));
