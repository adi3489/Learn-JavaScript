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

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearUntilRetirement(1991, "Aditya"));
// const yearUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear; // Ensure the same variable is used here
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearUntilRetirement(1991));
