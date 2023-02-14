/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
var myString = "Obaid";
var myNumber = 22;
var myArray = ["Obaid", 22];
var myObject = {
    name: "obaid",
    age: 22
};
var myBoolean = true;
var myUndefined = undefined;
var myNull = null;
// TESTS
// Tests for equality and inequality with strings
console.log(myString === "Obaid"); // returns true
console.log(myNumber >= 30); // returns false
console.log(myNumber === myNumber); // returns true
console.log(myNumber === 44); // returns false
// Test using the lower case function
console.log(myString.toLowerCase() === "obaid"); // returns true
// Tests using "AND - && "  and " OR - ||" operators
console.log(myString == 'Obaid' && myNumber == 22); // returns true
console.log(myString === 'OBAID' || myNumber === 31); // returns false
// Test whether an item is in a array
console.log("Item is Available in Array", myArray.includes("Obaid")); // returns true
console.log("Item is not Available in Array", myArray.includes("Awan")); // returns false
