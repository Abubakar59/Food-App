

let user = prompt("What is your name?");

let food = ["Rice", "Beans", "Jollof rice", "Roasted chicken"];
let drinks = ["Water", "Coke", "Fanta", "Sprite", "Fearless"];

let choice = prompt(user + ", welcome to our restaurant. What would you like to have? Drinks or Food?");

if (choice.toLowerCase() === "drinks") {
    let drinkChoice = prompt("Nice choice! We have: " + drinks.join(", ") + ". What drink would you like?");
    
    if (drinks.includes(drinkChoice)) {
        alert("Your order " + drinkChoice + " has been received, arriving in 45 minutes.");
    } else {
        alert("Sorry, we don't have that drink.");
    }

} else if (choice.toLowerCase() === "food") {
    let foodChoice = prompt("Great! We have: " + food.join(", ") + ". What food would you like?");
    
    if (food.includes(foodChoice)) {
        alert("Your order " + foodChoice + " has been received, arriving soon.");
    } else {
        alert("Sorry, we don't have that food.");
    }

} else {
    alert("Please select either 'Food' or 'Drinks'.");
}