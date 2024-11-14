
// Function to confirm adding item to cart
function confirmToCart(itemName, itemPrice) {
    // Ask user for confirmation to add item to cart
    var addToCartConfirmation = confirm("Do you want to add " + itemName + " to your cart?");
    if (addToCartConfirmation) {
        addToCart(itemName, itemPrice);
        alert("Item added to cart!");
    } else {
        alert("Item not added!");
    }
}

// Function to add item to cart
function addToCart(itemName, itemPrice) {

    // Get all cart items
    var cartItems = document.querySelectorAll('.cart-items tr');
    
     // Check if item already exists in cart
    var existingItem = Array.from(cartItems).find(item => item.cells[0].textContent === itemName);

    if (existingItem) {
        var quantitySpan = existingItem.querySelector('.quantity');
        quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    } else {
        var cartItem = document.createElement('tr');

        // Set inner HTML for new cart item
        cartItem.innerHTML = `
            <td>${itemName}</td>
            <td>${itemPrice}</td>
            <td>
                <button class="quantity-btn" onclick="decreaseQuantity(this)">-</button>
                <span class="quantity">1</span>
                <button class="quantity-btn" onclick="increaseQuantity(this)">+</button>
            </td>
            <td><button class="remove-button" onclick="removeItem(this)">Remove</button></td>
        `;
        // Append new cart item to cart
        document.querySelector('.cart-items').appendChild(cartItem);
    }
    // Update total price
    updateTotal();
}


// Function to update total price
function updateTotal() {
    // Get all cart items
    var cartItems = document.querySelectorAll('.cart-items tr');
    var total = 0;

    // Calculate total price based on item prices and quantities
    cartItems.forEach(function(item) {
        var price = parseFloat(item.querySelector('td:nth-child(2)').textContent);
        var quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });

     // Update total price displayed in cart
    document.getElementById('total-price').textContent = '$' + total.toFixed(2);
}

// Function to increase quantity of item in cart
function increaseQuantity(button) {
    var quantitySpan = button.parentElement.querySelector('.quantity');
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    updateTotal();
}

// Function to decrease quantity of item in cart
function decreaseQuantity(button) {
    var quantitySpan = button.parentElement.querySelector('.quantity');
    var newQuantity = parseInt(quantitySpan.textContent) - 1;
     // Ensure quantity isn't below 0
    if (newQuantity > 0) {
        quantitySpan.textContent = newQuantity;
    }
    // Update total price
    updateTotal();
}

// Function to remove item from cart
function removeItem(button) {
     // Get parent row of button
    var row = button.parentElement.parentElement;
    row.remove();
    updateTotal();
}

// Function to redirect to checkout page
function redirectToCheckout() {
    var cartItems = document.querySelectorAll('.cart-items tr');
    if (cartItems.length >0){
        window.location.href = "Checkout-form.html";        
    } else {
        // Show message if cart is empty
        alert("Your cart is empty. Please add items to proceed to checkout.")
    }
}
