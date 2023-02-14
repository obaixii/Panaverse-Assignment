// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "obaid awan";
var titleCase = personName.replace(/(^|\s)\S/g, function (t) { return t.toUpperCase(); });
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(titleCase);
