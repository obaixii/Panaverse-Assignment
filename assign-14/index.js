// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var myGuests = ["Hassan", "Farhad", "Yasir"];
// using Console.log() to execute the program manually
console.log("Hi ".concat(myGuests[0], ", i would like to invite you for dinner."));
console.log("Hi ".concat(myGuests[1], ", i would like to invite you for dinner."));
console.log("Hi ".concat(myGuests[2], ", i would like to invite you for dinner."));
// using For Loop to execute program at once for each index in array
console.log("\nPrinting message Using For Loop");
for (var i = 0; i < myGuests.length; i++) {
    var guestName = myGuests[i];
    console.log("Hi ".concat(guestName, ", i would like to invite you for dinner."));
}
;
