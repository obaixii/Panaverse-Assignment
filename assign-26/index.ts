/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

var alien_color = 'green';

// Writing if statement and printing message based on color

// If Alien color is green, earned 5 points
if(alien_color=='green'){
    console.log(`Your Alien Color is ${alien_color},You just earned 5 points`);
}else{
    console.log(`Your Alien Color is not ${alien_color},You just earned 10 points`);
}

// If Alien color is not green, earned 10 points
if(alien_color!=='green'){
    console.log(`Your Alien Color is ${alien_color},You just earned 5 points`);
}else{
    console.log(`Your Alien Color is not ${alien_color},You just earned 10 points`);
}