// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

var myGuests = ["Obaid","Hassan","Yasir","Farhad","Jazib"];

// Using for Loop to execute msgs for guests
for( let i = 0 ; i < myGuests.length ; i++){
    console.log(`Hi ${myGuests[i]}, you are invited to dinner on 30th May`);
}

// Number of guests attending dinner
console.log(`We are inviting ${myGuests.length} guests for dinner`);

