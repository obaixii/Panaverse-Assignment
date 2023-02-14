// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Guests list
var myGuests = ["Hassan", "Farhad", "Yasir", "Obaid"];
// Guests who will attend the dinner
for (var i = 0; i < myGuests.length; i++) {
    console.log("Hi ".concat(myGuests[i], ", i would like to invite you for dinner."));
}
// Guest who excused making it to the dinner
console.log("".concat(myGuests[3], " excused that he cannot make it to dinner"));
// Inviting another guest and replacing to the one who excused
myGuests[3] = 'Ahmed';
// Informing Everyone that we have found bigger table with more space
console.log('Hey Everyone, We have found a bigger dinner table. So we will invite more people for dinner');
// Inviting new Guest - Adding new element to the start of an array using unshift-method
myGuests.unshift("Hussain");
// Inviting new Guest - Adding new element in the middle of an array using splice-method
myGuests.splice(myGuests.length / 2, 0, "Zeeshan");
// Inviting new Guest - Adding new element in the end of an array using push-method
myGuests.push("Ali");
// SPACE ISSUE - CAN ONLY INVITE TWO MORE GUESTS
// removing one guest at a time
myGuests.pop();
// using loop to shrink guest list to only two guests
for (var i = myGuests.length - 1; i > 1; i--) {
    console.log("Hi, ".concat(myGuests[i], ", I am really sorry to inform you that you cannot attend the dinner"));
    myGuests.pop();
}
// New list of Guests
for (var i = 0; i < myGuests.length; i++) {
    console.log("Hi ".concat(myGuests[i], ", i would like to invite you for dinner."));
}
// Removing remaining Guests
myGuests.pop();
myGuests.pop();
console.log(myGuests);
