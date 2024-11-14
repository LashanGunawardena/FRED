
// Event listener for changes in payment method
document.getElementById('payment-method').addEventListener('change', function() {
    
    // Get the selected payment method
    var paymentMethod = this.value;
    var cardNumberInput = document.getElementById('card-number-input');

    // Check if payment method is 'card'
    if (paymentMethod === 'card') {

        // Display the card number input
        cardNumberInput.style.display = 'block';
        var submitBtn = document.querySelector('.submit-btn');
        submitBtn.style.marginTop = '45px'; 
    } else {
        // Hide the card number input
        cardNumberInput.style.display = 'none';
        var submitBtn = document.querySelector('.submit-btn');
        submitBtn.style.marginTop = '15px'; 
    }
});

// Function to confirm checkout
function checkoutConfirm() {
    // Check if checkout form is completed
    var checkoutFormCompleted = isCheckoutFormCompleted();

    // If form is completed
    if (checkoutFormCompleted) {
        // Confirm order with user
        var confirmOrder = confirm("Are you sure you want to complete your purchase?");
        
        // If user confirms order
        if (confirmOrder) {
            alert("Your order has been successfully placed! Thank you for shopping with us.");
            
        } else {
            alert("Your order has been cancelled.");
        }
    } else {
        // If form is not completed, prompt user to complete it
        alert("Please complete the checkout form before confirming your purchase.");
        return;
    }
}

// Function to check if checkout form is completed
function isCheckoutFormCompleted() {
    var nameInput = document.getElementById('fullname').value;
    var addressInput = document.getElementById('address').value;
    var paymentInput = document.getElementById('payment-method').value;

     // Check if all required inputs are filled
    if (nameInput && addressInput && paymentInput) {

        // If payment method is 'card', check if card number is filled
        if (paymentInput === 'card') {
            var cardNumber = document.getElementById('card-number').value;
            if (!cardNumber) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

