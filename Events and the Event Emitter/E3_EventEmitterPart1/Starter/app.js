var Emitter = require("./emitter");

var emtr = new Emitter();

// adding functions to the array of listeners
emtr.on('greet', function() {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
    console.log('A greeting occured!');
});

// emitting the event, which will kick off the functions
console.log('Hello!');
emtr.emit('greet');
emtr.emit('hello');