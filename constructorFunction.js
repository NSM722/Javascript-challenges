// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

// a class version of this constructor function is

// class Book {
//   constructor(id, title, author, themes = []) {
//     // your code here
//     this.id = id,
//       this.title = title,
//       this.author = author,
//       this.themes = themes
//   }
//   addTheme(newTheme) {
//     this.themes = [...this.themes, newTheme]

//   }
//   removeTheme(theme) {
//     this.themes = this.themes.filter(item => item !== theme)
//   }
// }


function Book(id, title, author, themes = []) {
  // your code here
  this.id = id,
    this.title = title,
    this.author = author,
    this.themes = themes
}

Book.prototype.addTheme = function (newTheme) {
  this.themes = [...this.themes, newTheme]

}

Book.prototype.removeTheme = function (theme) {
  this.themes = this.themes.filter(item => item !== theme)
}

const favBookOne = new Book(1, 'Empty out the Negative', 'Joel Osteen', ['Motivation'])
const favBookTwo = new Book(2, 'Think Big', 'Ben Carson', ['Motivation', 'Faith'])
favBookTwo.addTheme('Encouragement')
favBookOne.removeTheme('Motivation')

console.log(favBookOne)
console.log(favBookTwo)

// checking for prototypal inheritance
// prototype chain allows objects to inherit properties and methods from other objects. 
console.log(Object.getPrototypeOf(favBookOne).constructor)
// OR
// console.log(favBookTwo.__proto__)
