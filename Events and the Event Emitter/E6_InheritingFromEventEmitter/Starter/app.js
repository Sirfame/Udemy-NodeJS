var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello World!';
}

// This line gives all the objects created with Greetr access to the methods and properties of EventEmitter, as if we created the object with a Event Emitter constructor.
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + " : " + data);
    // Since we inherited from event emitter, we have access to its methods.
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log("someone greeted : " + data);
});

greeter1.greet("Tony");