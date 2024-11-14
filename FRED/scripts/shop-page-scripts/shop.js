//Function to handle clicking on the cart link
document.getElementById("cart-link").addEventListener("click", function(event) {
    event.preventDefault();
    const cartSection = document.getElementById("cart-section");
    cartSection.classList.add("cart-section-visible");
    setTimeout(() => {
        cartSection.scrollIntoView({ behavior: "smooth" });
    }, 50); 
});

// Function to confirm donation
function confirmDonation(itemName, itemPrice) {

    // Ask user for confirmation
    var donateConfirmation = confirm("Would you like to donate " + itemName + "?");
    if (donateConfirmation) {
        // Add donation to cart if confirmed
        addToCart(itemName, itemPrice);
        alert("Thank you for your donation!");
    } else {
        alert("donation cancelled");
    }
}

// Function to handle custom donation amount
function confirmCustomDonation() {

    // Prompt user to enter custom amount
    var customAmount = prompt("Enter custom amount:");

    // Check if custom amount is valid
    if (customAmount !== null && !isNaN(customAmount) && customAmount.trim() !== "") {
        var itemName = "Custom Donation";
        var itemPrice = parseFloat(customAmount);
        var donateConfirmation = confirm("Would you like to donate " + itemPrice + "?");
        
        if (donateConfirmation) {
            // Add custom donation to cart if confirmed
            addToCart(itemName, itemPrice);
            alert("Thank you for your donation!");
        } else {
            alert("donation cancelled");
        }
    } else {
        alert("Invalid amount. No donation was made.");
    }
}