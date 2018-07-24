var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push(item = {
   itemName: item,
   itemPrice: Math.floor(Math.random()*101)
 });
 return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length > 0) {
   for(var i=0; i<cart.length; i++) {
     var cartList = []
   } 
  }else{
    return 'Your shopping cart is empty.'
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
