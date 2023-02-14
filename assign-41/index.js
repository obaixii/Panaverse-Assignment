/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magicianNames in the array.
*/
// Created Array containing Magicians Names
var magicians = ["Emilia", "Blake", "Hansen", "George"];
// Passed the names of magicians to function
show_magicians(magicians);
function show_magicians(magicianNames) {
    for (var i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}
