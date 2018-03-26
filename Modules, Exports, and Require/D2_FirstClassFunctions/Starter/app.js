// Your Javascript Code Goes Here
// function statement
function greet() {
    console.log("hi");
}
greet();

// functions are first class
// functions in JS are objects, that is how it is possible to pass another function in
// fn here is an anon function passed in
function logGreeting(fn) {
    fn();
}
// notice that the function passed into logGreeting does not have parenthesis, this is because that would actually run function.
// That is not what we want. We want to pass the function like an object so that the logGreeting function can call it.
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log("Hello SF");
}

greetMe();

// Still first class, so can pass it in the earlier logGreeting function
logGreeting(greetMe);

// use a function expression on the fly
// used a lot because why bother setting the function to a variable when im only gonna use it once
logGreeting(function() {
    console.log("ni hao");
});