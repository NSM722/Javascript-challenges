/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "alpha"
Example Output: "Alpha"

*/

function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  /**
   * split the str to an array of words
   * map through each item and capitalize the 
   * first letter using the captilazeWord() function
   */
  const sentenceArr = str.split(' ').map(item => {
    return capitalizeWord(item)
  })

  /**
   * join the array back to a string of words
   */
  return sentenceArr.join(' ')
}

console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
console.log(toTitleCase("everything, everywhere, all at once"))