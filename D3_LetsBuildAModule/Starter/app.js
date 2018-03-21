// Your Javascript Code Goes Here

// Note: The 'starter' folders that appear in this course's downloadable source code is here to give you a starting point to try out coding yourself. The 'finished' folder contains the code as it is when we finish the lecture. You can use the 'finished' folder to compare to your own code, or just examine the finished code.
// Require is a function that Node JS makes available in its JS core. First argument will be a string, is the location or the name of the module
// ./ means same folder level. no need to include .js, Node is smart enough to assume that the required module is JS
var greet = require("./greet");

// functions are first class, so greet is the function object, adding the parenthesis will call the function
greet();