/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log("hi" , cartItems)
  showCart(cartItems.items);
}


// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  // showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart(items) {
  let cartContentsTable = document.querySelector('tbody')
// DONE: Find the table body
for (let i = 0 ; i < items.length; i ++){
  let tr = document.createElement('tr')
  // tr.textContent = items[i].items
  cartContentsTable.appendChild(tr)
  tr.textContent = [i].name
  let td1 = document.createElement('td')
  tr.appendChild(td1)
  let a = document.createElement('a')
  let linktext = document.createTextNode('X');
  a.setAttribute("href", 'https://www.google.com/?client=safari');
  td1.appendChild(a);
  a.appendChild(linktext);
  // a.textContent = 'remove'
  // td1.textContent = 'X'
  let td2 = document.createElement('td')
  tr.appendChild(td2)
  td2.textContent = items[i].quantity
  let td3 = document.createElement('td')
  tr.appendChild(td3)
  td3.textContent = items[i].items
}
  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();

