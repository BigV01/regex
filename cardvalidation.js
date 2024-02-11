function validateCreditCard(cardNumber) {
    // Define regex patterns for different card types
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardPattern = /^5[1-5][0-9]{14}$/;

    // Check if the card number matches any of the patterns
    if (visaPattern.test(cardNumber)) {
        return 'Visa';
    } else if (mastercardPattern.test(cardNumber)) {
        return 'Mastercard';
    } else {
        return 'Invalid card';
    }
}

// Function to prompt the user for input and test the credit card validation
function testCardValidation() {
    const cardNumber = prompt("Enter your credit card number:");
    const cardType = validateCreditCard(cardNumber);
    alert(`The card type is: ${cardType}`);
  }
  
  // Call the function to test credit card validation
  testCardValidation();
  