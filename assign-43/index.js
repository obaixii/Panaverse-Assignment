/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Magician List
var magicians = ["Emilia", "Blake", "Hansen", "George"];
// Printing Magicians Names
function show_magicians(magicianNames) {
    for (var i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}
// Printing message along Magicians names without mutating original Array
function make_great(magicianNames) {
    var new_array = __spreadArray([], magicianNames, true);
    for (var i = 0; i < new_array.length; i++) {
        new_array[i] = "Hello " + new_array[i];
        console.log(new_array[i]);
    }
}
// Original Magicians Array
show_magicians(magicians);
// Modified Array
make_great(magicians);
// Original Magicians Array Modified
show_magicians(magicians);
console.log("Original Array", magicians);
