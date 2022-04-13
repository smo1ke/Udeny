"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.count === "" ||
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Not mush movies watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("You are classic watcher ?");
    } else if (personalMovieDB.count > 30) {
      console.log("You are movie liker");
    } else {
      console.log("Error");
    }
  },
  showDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      // personalMovieDB.genres[i - 1] = genre;

      // if (genre === "" || genre === null) {
      //   console.log("Incorrect datd");
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }
      let genres = prompt(
        `Введите ваши любимые жанры  через запятую`
      ).toLowerCase();
      if (genres === "" || genres === null) {
        console.log("Incorrect datd");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item} `);
    });
  },
  toggleVisibleMyBD: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      return (personalMovieDB.privat = true);
    }
  },
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyBD();
// personalMovieDB.showDB();
personalMovieDB.writeYourGenres();

console.log(personalMovieDB);

// for (let i = 0; i < 3; i++) {
//   if (personalMovieDB.count < 10) {
//     console.log("Not mush movies watched");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("You are classic watcher ?");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("You are movie liker");
//   } else if (personalMovieDB.count !== null && personalMovieDB.count !== "") {
//     console.log("Error");
//   }
// }

// switch (personalMovieDB.count) {
//   case 9:
//     console.log("Not mutch movies watched");
//     break;
//   case 25:
//     console.log("You are classic movie watcher");
//     break;
//   case 40:
//     console.log("You are crazy");
//     break;
//   default:
//     console.log("Error");
// }

// if (a) {
//   console.log("Ok!");
// } else {
//   console.log("Error");
// }

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("To much");
// } else {
//     console.log("Ok!");
// }

// num === 50 ? console.log("Ok!") : console.log("Error");

// const num = 49;

// switch (num) {
//   case 49:
//     console.log("Wrong");
//     break;
//   case 100:
//     console.log("Wrong");
//     break;
//   case 50:
//     console.log("Ok!");
//     break;
//   default:
//     console.log("Not this time");
//     break;
// }

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// let num = 50;

// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   // let num = 10;
// }

// showFirstMessage("Hello");
// console.log(num);

// function calc(a, b) {
//   return a + b;
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//   let num = 50;
//   return num;
// }

// const anoterNum = ret();
// console.log(anoterNum);

// const loger = function () {
//   console.log("Hello");
// };

// loger();

// const calc = (a, b) => a + b;

// console.log(calc(3, 3));

// const str = "teSt";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const someFruit = "Some fruit";

// console.log(someFruit.indexOf("fruit"));

// const logg = "Hello World!";

// // console.log(logg.slice(6, 11));

// // console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";

// console.log(parseInt(test));
// console.log(parseFloat(test));
