/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon",
  "🍳 eggs",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli",
  "🧀 cheese",
  "🥦 broccoli",
  "🌶️ hot sauce"
]

const yoloRecipe = ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"]


function removeDuplicatesFromArray(arr) {
  const uniqueItemsArr = arr.filter((item, index, arr) => arr.indexOf(item) === index)
  return uniqueItemsArr

  // option 2
  // return [...new Set(arr)]

  //option 3
  // const uniqueItemsArr = myArray.reduce((acc, item) => {
  //   return acc.includes(item) ? acc : [...acc, item]
  // },[]);
}

console.log(removeDuplicatesFromArray(eggScrambleRecipe));
console.log(removeDuplicatesFromArray(yoloRecipe))
// console.log(removeDuplicatesFromArray([1, 2, 2, 4, 4, 4, 4, 6, 7, 8]));