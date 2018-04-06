var fs = require('fs');

// fs reads binary data and converts the data to text with encoding
// Will use utf 8 encoding by default
// This is a synchronous function, which means that the program will wait
// until the buffer is filled and gets the string back before the V8 engine moves on to the next line of code.

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet)

// In most cases, we do not want to run this synchornously, because if we have a lot of users requesting to
// read a file, then users will be blocked since Node runs synchronously, even though node is async.

// This is the async version of the readFile function
// Thanks to the event loop, the callback function is run after the main work is finished. V8 will continue running.
// what comes back by default is binary buffer. Can include encoding as the second parameter
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
    console.log(data);
});

console.log("done!");