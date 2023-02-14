/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
// Created Array containing Magicians Names
var magicians = ["Emilia", "Blake", "Hansen", "George"];
function show_magicians(magicianNames) {
    for (var i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}
function make_great(magicianNames) {
    for (var i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = "Hi " + magicianNames[i];
        console.log("Hi " + magicianNames[i]);
    }
}
// Original Magicians Array
show_magicians(magicians);
// Modified Array
make_great(magicians);
// Original Magicians Array Modified
show_magicians(magicians);
console.log("Original Array Modified", magicians);
