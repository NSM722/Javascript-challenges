/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,they've become a jumbled 
mess of nested arrays. Let's help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76], 89, 98, [87, 56, 90],
  [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
  ["🐟", "💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flattenArray(arr) {
  // option 1 - use the built in flat() method
  // const newMainArr = arr.flat()
  // return newMainArr

  // option 2 - intialize an empty array, loop through 
  // the current array while checking for types and 
  // pushing values to the new array
  // const newMainArr = [];
  // arr.forEach(item => {
  //     if(typeof item === 'string') {
  //         newArr.push(item)
  //     } else if(typeof item === 'object') {
  //         item.forEach(val => newArr.push(val))
  //     }
  // })
  // return newMainArr

  // concatenate arrays and values into one main array
  const newMainArr = arr.reduce((acc, currentValue) => {
    return acc.concat(currentValue)
  }, [])
  return newMainArr


}

console.log(flattenArray(kittyPrizes));
console.log(flattenArray(kittyScores));
