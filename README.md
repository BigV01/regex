"Credit Card Validator"
This JavaScript program validates credit card numbers and determines their types (Visa, Mastercard, or Invalid Type).

Brief Explanation of Usage

To use this program:

  The user should copy the provided JavaScript code into a .js file; such as cardvalidation.js

  Run the program in a JavaScript environment that supports user input.

When prompted, enter a credit card number.

 The program will determine the type of the credit card (Visa, Mastercard, or Invalid Type) and display the result.

How It Works

Visa card pattern (^4[0-9]{12}(?:[0-9]{3})?$):

^: Asserts the start of the string.
4: Matches the first digit of a Visa card.
[0-9]{12}: Matches the next 12 digits (total 13 digits for Visa).
(?:[0-9]{3})?: Optionally matches the last 3 digits in a non-capturing group.
$: Asserts the end of the string.

Mastercard pattern (^5[1-5][0-9]{14}$):

^: Asserts the start of the string.
5[1-5]: Matches the first two digits of a Mastercard (51 to 55).
[0-9]{14}: Matches the next 14 digits (total 16 digits for Mastercard).
$: Asserts the end of the string.

This program validates the inputed credit card number against the regex patterns and returns the corresponding card type if a match is found or throws up an invalid card description if no match is found.