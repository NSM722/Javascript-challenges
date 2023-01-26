/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];
const sumOfEvenNums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

function sumArray(arr) {
  return arr.reduce((total, current) => {
    return total + current
  }, 0)
}

console.log(sumArray(studentCount));
console.log(sumArray(sumOfEvenNums));