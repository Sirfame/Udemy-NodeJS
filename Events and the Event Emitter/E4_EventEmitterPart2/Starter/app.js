var Emitter = require("events");
var eventConfig = require("./config").events;

var emtr = new Emitter();

// adding functions to the array of listeners
emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
    console.log('A greeting occured!');
});

// emitting the event, which will kick off the functions
console.log('Hello!');
emtr.emit(eventConfig.GREET);
emtr.emit(eventConfig.GREET);