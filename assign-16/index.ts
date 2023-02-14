// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Guests list
var myGuests = ["Hassan","Farhad","Yasir","Obaid"];

// Guests who will attend the dinner
for( let i=0; i < myGuests.length; i++){
    console.log(`Hi ${myGuests[i]}, i would like to invite you for dinner.`);
}

// Guest who excused making it to the dinner
console.log(`${myGuests[3]} excused that he cannot make it to dinner`);

// Inviting another guest and replacing to the one who excused
myGuests[3] = 'Ahmed';


// Informing Everyone that we have found bigger table with more space
console.log('Hey Everyone, We have found a bigger dinner table. So we will invite more people for dinner');

// Inviting new Guest - Adding new element to the start of an array using unshift-method
myGuests.unshift("Hussain");

// Inviting new Guest - Adding new element in the middle of an array using splice-method
myGuests.splice( myGuests.length/2, 0, "Zeeshan");

// Inviting new Guest - Adding new element in the end of an array using push-method
myGuests.push("Ali");

// New list of Guests
for( let i=0; i < myGuests.length; i++){
    console.log(`Hi ${myGuests[i]}, i would like to invite you for dinner.`);
}

