/*
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/

function city_country(name, country){
    return name + ", " + country
}

console.log(city_country('Rawalpindi', 'Pakistan'))
console.log(city_country('Makkah', 'Saudi Arabia'))
console.log(city_country('Berlin', 'Germany'))