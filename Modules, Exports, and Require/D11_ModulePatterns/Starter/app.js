// Pattern 1: Replacing exports with function
var greet = require('./greet1');
greet();

// Pattern 2: This way, we are returning just the function that is attached to the exports object, and calling it.
var greet2 = require('./greet2').greet;
greet2();

// Pattern 3: Replacing exports with an object, made from function contructor
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Ni Hao Si Jie"

// Node will look into the Cache because the file has been called before, and because it is an object, we are actually
// returned an object reference, which means we will be referencing the same object in memory.
var greet3b = require('./greet3');
greet3b.greet();

// Pattern 4: Passing the whole function constructor to module.exports.
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

// Pattern 5: Revealing module pattern, module exports returns an object with only one method, thus protecting the variable within the greet5 module
var greet5 = require('./greet5').greet;
greet5();