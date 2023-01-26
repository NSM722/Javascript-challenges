/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

function countChars(name) {
  // convert the name to lowercase and get rid of spaces
  const nameAsLowerCase = name.toLowerCase().split(' ').join('')

  // Initialize a n empty name object
  let nameObj = {}

  // loop through every character
  for (let i = 0; i < nameAsLowerCase.length; i++) {
    let currentChar = nameAsLowerCase[i]

    // check if it exists in the name object as a property
    // (!nameObj.hasOwnProperty(currentChar)) OR 
    if (!nameObj[currentChar]) {

      // if it doesn't exists add it and intialize its count to one
      nameObj[currentChar] = 1
    } else {

      // if it exists increment its count
      nameObj[currentChar]++
    }
  }
  return nameObj
}

console.log(countChars("Peggy Porth"));
console.log(countChars("Arnold Schwarznegger"))

