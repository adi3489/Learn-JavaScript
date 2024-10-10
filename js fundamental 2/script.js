"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// function logger() {
//   console.log("My name is Aditya");
// }

// logger(); //calling,runnung,invoking the funtion
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// function calcAge1(birthYear) {
//   //function declaration
//   //   const age = 2037 - birthYear;
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991); //function expression

// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const age2 = calcAge2(1991);

//Arrow function

// const calcAge3 = (birthYeah) => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement}`;
// };

//console.log(yearUntilRetirement(1991, "Aditya"));
// const yearUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear; // Ensure the same variable is used here
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearUntilRetirement(1991));

//function calling other function

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const yearUntilRetirement = function (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement}`;
// };

// const calAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearUntilRetirement = function (birthYeah, firstName) {
//   const age = calAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     return -1;
//     console.log(`${firstName} has already retired`);
//   }
//   //   return retirement;
//   // return
// };
// console.log(yearUntilRetirement(1991, "jonas"));
// console.log(yearUntilRetirement(1950, "Aditya"));

// //Arrays..................................................................................................................

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend = "peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends.length);
// const firstName = "aditya";
// const adi = [firstName, "singh", 21, "teacher"];
// console.log(adi);
// const jonasArray = [["Michael", "Peter", "Steven"]];
// console.log(jonasArray[0][1]);

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   CalcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.CalcBMI();
// console.log(mark.bmi);

//for loop keep runing while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Aditya ${rep}`);
}
