/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(sentence) {
  // new sentence with letters having an even index capitalized
  let newSentence = ``
  for (let i = 0; i < sentence.length; i++) {
    // check for character with an even index
    if (i % 2 === 0) {
      newSentence += sentence[i].toUpperCase()
    } else {
      newSentence += sentence[i]
    }
  }
  return newSentence;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
console.log(altCaps("I'm so happy it's Monday"))