// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var myFriends = ["Obaid", "Hassan", "Farhad", "Yasir"];
// Printing message to myFriends by using Array-index method
console.log("Hello ".concat(myFriends[0], ", How are you?"));
console.log("Hello ".concat(myFriends[1], ", How are you?"));
console.log("Hello ".concat(myFriends[2], ", How are you?"));
console.log("Hello ".concat(myFriends[3], ", How are you?"));
// Printing message to myFriends using for Loop
console.log("\nPrinting message Using For Loop");
for (var i = 0; i < myFriends.length; i++) {
    console.log("Hello ".concat(myFriends[i], ", How are you?"));
}
;
