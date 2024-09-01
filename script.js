

let user = prompt("What is your name?");

let food = ["Rice", "Beans", "Jollof rice", "Roasted chicken"];
let drinks = ["Water", "Coke", "Fanta", "Sprite", "Fearless"];

let choice = prompt(user + ", welcome to our restaurant. What would you like to have? Drinks or Food");

if (choice.toLowerCase() === "drinks") {
    let drinkChoice = prompt("Nice choice! What drink would you like? ");
    alert("Your order " + drinkChoice+ " Has been recived, Arriving in 45mint");
} else if (choice.toLowerCase() === "food") {
    let foodChoice = prompt("Great! What food would you like? " );
    alert("Your order" + foodChoice + " has been recived, Arriving soon");
} else {
    alert("Please select either Food or Drinks.");
}

