// Sharing class features with 'extends' keyword

// Parent class
class Product {
  constructor(name, price, discountable) {
    this.name = name
    this.price = price
    this.discountable = discountable
  }

  isDiscountable() {
    return this.discountable
  }
}


// When a subclass is created using extends, it inherits all the properties 
// and methods of the parent class, including its constructor.
class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
    // super() calls the parent class' constructor from the subclass' constructor
    super(name, price, discountable)
    this.percentOff = percentOff
  }

  getSalePrice() {
    // super() calls the parent class' method from the subclass' 
    // if not included the sub class won't have access to the parent's method(s)
    if (super.isDiscountable()) {
      return this.price * ((100 - this.percentOff) / 100)
    } else {
      return `${this.name} is not eligible for a discount`
    }
  }
}

const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20)
console.log(saleProduct1.getSalePrice())
