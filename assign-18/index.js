// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var myPlaces = ["Skardu", "London", "Tokyu", "Moscow", "Venice"];
// Printing Array in original order
console.log(myPlaces);
// Printing Array in Alphabetical order
console.log(myPlaces.slice().sort());
// Printing Array to check its original order
console.log("Checking after sorting in Alphabetical order", myPlaces);
// Printing Array in Reverse-Alphabetical order
console.log(myPlaces.slice().reverse());
// Printing Array to check its original order
console.log("Checking after sorting in Reverse-Alphabetical order", myPlaces);
// Reversing the order of original Array
console.log("Order Changes", myPlaces.reverse());
// Reversing the order of Array to get its original order
console.log("Original order Retrieved", myPlaces.reverse());
// Again Sorting Array in Alphabetical order
console.log(myPlaces.sort());
// Sorting Array in Reverse-Alphabetical order
console.log(myPlaces.sort().reverse());
// Rechecking Order of Array - (Changed)
console.log("Order of Array Changed", myPlaces);
