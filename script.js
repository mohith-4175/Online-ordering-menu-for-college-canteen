// js/script.js

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(itemName, itemPrice) {
  const existingItem = cart.find(item => item.name === itemName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${itemName} added to cart.`);
}

// Show cart items on cart.html
if (document.getElementById("cart-items")) {
  const cartContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
        <span>${item.name} (x${item.quantity})</span>
        <span>₹${item.price * item.quantity}</span>
      `;
      cartContainer.appendChild(itemDiv);
      total += item.price * item.quantity;
    });

    totalElement.textContent = `Total: ₹${total}`;
  }
}

// Simulate order placement
function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  localStorage.removeItem("cart");
  alert("Order placed successfully!");
  window.location.href = "index.html";
}
