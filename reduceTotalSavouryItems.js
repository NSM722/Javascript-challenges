/*
Calculate and return 
the total cost of only the savoury
items in the shopping cart.

Expected output: 9.97  
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

function totalSavoury(itemsArr) {
  return itemsArr
    .filter(item => item.type === 'savoury')
    .reduce((acc, current) => {
      return acc + current.price
    }, 0)

}

console.log(totalSavoury(shoppingCart))
