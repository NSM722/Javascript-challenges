/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/

const slotMachine = document.querySelector('.emoji-slots-game');
const food = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';

document.getElementById('btn').addEventListener('click', () => {
  getApiData(food)
})


function makeFruitArray(arr) {
  return arr.filter(food => food.group === 'food fruit')
}

function getRandomFruits(arr) {
  const randomFruits = []
  for (let i = 0; i < 9; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    randomFruits.push(arr[randomIndex])
  }
  return randomFruits
}

// write your fetch request here 
function getApiData(url) {
  fetch(url)
    .then(response => response.json())
    // filter the data to only get fruits
    .then(data => makeFruitArray(data))
    // get random fruits array
    .then(fruits => getRandomFruits(fruits))
    // map through the array to create an array of html strings
    .then(randomFruits => {
      let html = randomFruits.map(randomFruit => {
        return `<li>${randomFruit.htmlCode}</li>`
      }).join('')
      slotMachine.innerHTML = html
    })
}
