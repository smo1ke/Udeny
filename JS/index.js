"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// console.log(personalMovieDB);

// if (personalMovieDB.count < 10) {
//   console.log("Not mush movies watched");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//   console.log("You are classic watcher ?");
// } else if (personalMovieDB.count > 30) {
//   console.log("You are movie liker");
// } else {
//   console.log("Error");
// }

for (let i = 0; i < 3; i++) {
  if (personalMovieDB.count < 10) {
    console.log("Not mush movies watched");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are classic watcher ?");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are movie liker");
  } else if (personalMovieDB.count !== null && personalMovieDB.count !== "") {
    console.log("Error");
  }
}

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
