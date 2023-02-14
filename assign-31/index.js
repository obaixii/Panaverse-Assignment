/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
var users = ["Obaid", "Yasir", "Hassan", "Admin", "Farhad"];
// Checking if User List is empty or not
if (users.length == 0) {
    console.log('We need to find some users!');
}
else {
    // Printing Greeting Message for users
    for (var i = 0; i < users.length; i++) {
        if (users[i] === "Admin") {
            console.log("Hi ".concat(users[i], ", would you like to see a status report?"));
        }
        else {
            console.log("Welcome back ".concat(users[i], ", thank you for logging in again"));
        }
    }
}
// Removing All users from list
for (var i = users.length; i > 0; i--) {
    users.pop();
}
console.log(users);
console.log('We need to find some users!');
