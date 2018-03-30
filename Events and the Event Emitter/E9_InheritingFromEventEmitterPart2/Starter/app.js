var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	// This could be thought as the super constructor.
	EventEmitter.call(this);
	this.greeting = 'Hello world!';
}

// sets up the prototype chain
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
	console.log(this.greeting);
	this.emit('greet');
}

var greeter1 = new Greetr();

greeter1.on('greet', function() {
	console.log('Someone greeted!');
});

greeter1.greet();