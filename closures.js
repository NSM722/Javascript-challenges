/**
 * Challenge: Write a countdown function with a hard-coded 
 * starting number inside closure
 * Stretch goal: Write a countdown function that can count 
 * from a provided number, with a provided step
 */

// Challenge
// function countdown() {
//   let startCount = 11
//   return function innerCountdown() {
//     return startCount -= 1
//   }
// }

// const countingDown = countdown();

// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());

// Stretch goal
function countdown(input, step) {
  return function innerCountdown() {
    return input -= step
  }
}

const countingDown = countdown(20, 5);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());