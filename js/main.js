/* JavaScript for WATS 3020 Sandwich Machine Assignment */
//Miles Coleman

//Solicit user input for sandwich, bread, sauce, and toppings
let sandwichType = prompt("Which sandwich do you want? (the cyber-turkey: turkey, swiss cheese, and digital lettuce; or the world wide vegetable: roasted bell peppers, seasoned mushrooms, and cheddar cheese.")
let breadType = prompt("What kind of bread would you like? (wheat, rye, or sourdough)?")
let meatType = prompt("Do you a meat you'd like to add? (You can choose turkey, ham, or vegetables--separate individual items with a comma)")
let toppingsType = prompt("Do you have special toppings you'd like to add? (You can choose pickle, onion, or extra cheese--separate individual items with a comma)")
let condimentType = prompt("What kind of sauce do you want on your sandwich? (chipotle ranch or honey aoli)--separate individual items with a comma)")
let studentDeal = prompt("Are you a student? Type yes or no. (If not, leave blank)")


if (studentDeal == "yes") {
    studentMath = 1; 
} else { 
    studentMath = 0; 
}

//Individual item prices
let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

//Convert order information into arrays
let meatArray = meatType.split(",");
let toppingArray = toppingsType.split(",");
let condimentArray = condimentType.split(",");

//Calculate cost of sandwich items
let meatAmount = meatArray.length * prices.meat;
let toppingAmount = toppingArray.length * prices.topping;
let condimentAmount = condimentArray.length * prices.condiment;

//Combine items and sandwich prices into subtotal
let subtotal = prices.sandwich + meatAmount + toppingAmount + condimentAmount;

//Add tax
let waStateTaxRate = 0.065;
let sandwichTax = subtotal * waStateTaxRate;

//Student deal
let studentDiscountRate = .20; 
let studentDiscount = studentDiscountRate * subtotal * studentMath; 

//Add up total 
let totalAmount = sandwichTax + subtotal - studentDiscount;

//Print itemized receipt 
let receiptTemplate = `
    <p>Sandwich: ${sandwichType}</p>
    <p>Bread: ${breadType}</p>
    <p>Meat: ${meatType}</p>
    <p>Toppings: ${toppingsType}</p>
    <p>Condiments: ${condimentType}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatAmount.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingAmount.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentAmount.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${sandwichTax.toFixed(2)}</p>
	<p class="text-right">Student Discount: $${studentDiscount.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalAmount.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
