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
    var cartList = [];
    for(var i=0; i<cart.length; i++) {
      cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    if(cartList.length > 1) {
      cartList[cartList.length-1] = "and "+ cartList[cartList.length-1];
    }
    return `In your cart, you have ${cartList.join(', ')}.`;
  }else{
    return 'Your shopping cart is empty.';
  }
}

function total() {
  // write your code here
  var totalPrice;
  for(var i=0; i<cart.lenth; i++) {
    totalPrice += parseInt(cart[i].itemPrice,10);
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  if(cart.indexOf(item) > 0) {
    cart.splice(cart.indexOf(item),1);
    return cart;
  }else{
    return 'That item is ot in your cart.';
  }
}
    

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    total();
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
  }else{
    return "Sorry, we don't have a credit card on file for you.";
  }
}
