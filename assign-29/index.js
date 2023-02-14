/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */
// Favorite Fruits List
var favorite_fruits = ["Apple", "Kiwi", "Banana", "Grapes", "Pomegranate"];
// If Statements to check certain fruits available in array
if (favorite_fruits.includes("Apple")) {
    console.log("I really like Apple!");
}
if (favorite_fruits.includes("Kiwi")) {
    console.log("I really like Kiwi!");
}
if (favorite_fruits.includes("Banana")) {
    console.log("I really like Banana!");
}
if (favorite_fruits.includes("Pomegranate")) {
    console.log("I really like Pomegranate!");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("I really like Grapes!");
}
