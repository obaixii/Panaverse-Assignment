// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var personName = "\tObaid\t\nAwan";

// personName with whitespace and without stripping
console.log("Name with whitespace: " + personName);

// personName without whitespace and with stripping
console.log("Name without whitespace: " + personName.trim());