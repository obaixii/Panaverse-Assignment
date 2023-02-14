/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

// Function with default params
function make_shirt(size = "large", text = "I love JavaScript") {
    console.log(`The size of the shirt is ${size} and message is ${text}`)
}

// Large Size shirt with default text
make_shirt();

// Medium Size shirt with default text
make_shirt("medium");

// Small size shirt with different message
make_shirt("Small", "Don't repeat yourself");