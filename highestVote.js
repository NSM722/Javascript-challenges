/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 21,
  "🍝 pasta": 5
}

function findTheWinner(obj) {
  // initialize variable for the winning key
  let currentWinningKey;

  // initialize the value of the highest vote to zero
  let currentHighVal = 0;

  // loop through the keys of the object
  for (let key in obj) {
    // if the current key is greater than the winning vote value
    if (obj[key] > currentHighVal) {
      // the value of the current key becomes the highest vote value
      currentHighVal = obj[key]
      // the current key becomes the final winning key
      currentWinningKey = key
    }
  }
  return `The winner is ${currentWinningKey} with ${currentHighVal} votes!`
}

console.log(findTheWinner(gameNightFood));