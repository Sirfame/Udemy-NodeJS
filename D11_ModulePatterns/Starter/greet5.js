var greeting = "Hello World!!!!!";

function greet() {
    console.log(greeting);
}

// will not have direct access to greeting variable once exports is returned.
// this will reveal only the methods and variables you want someone to use.
// This is called the revealing module pattern
module.exports = {
    greet: greet
}