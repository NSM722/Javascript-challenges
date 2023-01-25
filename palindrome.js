/* 
Palindromes are words that are the same forward or backward. 
For example, the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(word) {
  // option 1
  // return word.split('').reverse().join('') === word

  // option 2
  // let newWord = ''
  //   for(let i = word.length - 1; i >= 0; i--) {
  //       newWord += word[i]
  //   }
  //   return word === newWord

  let newWord = word.split('').reverse().join('')
  return word === newWord
}

console.log(isPalindrome("quit"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
