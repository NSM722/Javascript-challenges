/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

const shoppingCart = [
  {
    item: "🍭",
    price: 2.99,
    type: "sweet",
    onSale: true
  },
  {
    item: "🍫",
    price: 1.99,
    type: "sweet",
    onSale: true
  },
  {
    item: "🥫",
    price: 1.99,
    type: "savoury",
    onSale: false
  },
  {
    item: "🍬",
    price: .89,
    type: "sweet",
    onSale: false
  },
  {
    item: "🥦",
    price: 3.99,
    type: "savoury",
    onSale: false
  },
  {
    item: "🍖",
    price: 3.99,
    type: "savoury",
    onSale: true
  },
]

function total(itemsArr) {
  // initialize an array that maps over 
  // the data and returns only the prices
  const prices = itemsArr.map(item => item.price)
  // use reduce() to get the total price
  const totalPrice = prices.reduce((total, current) => {
    return total + current
  }, 0)
  // round the total to two decimal places
  return totalPrice.toFixed(2)
}

console.log(total(shoppingCart))
