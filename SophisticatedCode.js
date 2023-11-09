/* 
   Filename: SophisticatedCode.js
   Purpose: An example of sophisticated, elaborate and complex JavaScript code 
   Description: This code demonstrates a virtual shopping cart system with multiple functionalities such as adding, removing, and updating items, applying discounts and taxes, and generating an invoice.
*/

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter(i => i !== item);
  }

  updateItemQuantity(item, quantity) {
    this.items.forEach(i => {
      if (i === item) {
        i.quantity = quantity;
      }
    });
  }
}

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Discount {
  constructor(code, percent) {
    this.code = code;
    this.percent = percent;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem(new Item("Shirt", 25, 2));
shoppingCart.addItem(new Item("Jeans", 50, 1));
shoppingCart.addItem(new Item("Sunglasses", 100, 1));

function calculateSubtotal() {
  return shoppingCart.items.reduce((subtotal, item) => subtotal + (item.price * item.quantity), 0);
}

function applyDiscount(subtotal, discount) {
  return subtotal - (subtotal * discount.percent / 100);
}

function calculateTax(subtotal, taxRate) {
  return subtotal * taxRate / 100;
}

function generateInvoice() {
  const discountCode = "SUMMER2022";
  const discountPercent = 20;
  const taxRate = 8.5;

  const subtotal = calculateSubtotal();
  const totalAfterDiscount = applyDiscount(subtotal, new Discount(discountCode, discountPercent));
  const totalWithTax = totalAfterDiscount + calculateTax(totalAfterDiscount, taxRate);

  console.log("---- Invoice ----");
  console.log("Items:");

  shoppingCart.items.forEach(item => {
    console.log(`${item.name}: $${item.price} x ${item.quantity}`);
  });

  console.log("Subtotal: $" + subtotal.toFixed(2));
  console.log("Discount: " + discountPercent + "% off");
  console.log("Total after discount: $" + totalAfterDiscount.toFixed(2));
  console.log("Tax (8.5%): $" + (totalWithTax - totalAfterDiscount).toFixed(2));
  console.log("Total with tax: $" + totalWithTax.toFixed(2));
}

generateInvoice();