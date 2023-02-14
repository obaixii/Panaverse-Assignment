// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Guests list
var myGuests = ["Hassan","Farhad","Yasir","Obaid"];

// Guests who will attend the dinner
console.log(`Hi, ${myGuests[0]}, i would like to invite you for dinner`);
console.log(`Hi, ${myGuests[1]}, i would like to invite you for dinner`);
console.log(`Hi, ${myGuests[2]}, i would like to invite you for dinner`);
console.log(`Hi, ${myGuests[3]}, i would like to invite you for dinner`);


// Guest who excused making it to the dinner
console.log(`${myGuests[3]} excused that he cannot make it to dinner`);

// Inviting another guest and replacing to the one who excused
myGuests[3] = 'Ahmed';


// New list of Guests
console.log(`Hi, ${myGuests[0]}, i would like to invite you for dinner`);
console.log(`Hi, ${myGuests[1]}, i would like to invite you for dinner`);
console.log(`Hi, ${myGuests[2]}, i would like to invite you for dinner`);
console.log(`Hi, ${myGuests[3]}, i would like to invite you for dinner`);