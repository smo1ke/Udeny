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

// const arr = [1, 21, 35, 4, 5, 6];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} in ${arr}`);
// });

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("=>", "");

// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

const obj = {
  a: 5,
  b: 1,
};

// const copy = obj;// Link

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj;
  }

  return objCopy;
}

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);

const add = {
  d: 17,
  e: 20,
};

const clone = Object.assign({}, add);

clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArray = ["a", "b", "c"];

const newArray = oldArray.slice();

newArray[1] = "asasasaa";

console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "insta"],
  blogs = ["wordpress", "livej", "blogger"],
  internet = [...video, ...blogs, "facebook", "tiktok"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
  one: 1,
  two: 2,
};

const newQ = { ...q };

console.log(newQ);
