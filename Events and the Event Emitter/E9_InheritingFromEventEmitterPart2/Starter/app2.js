var util = require('util');

function Person() {
    this.firstname = "SF";
    this.lastname = "Lin";
}

Person.prototype.greet = function() {
    // by calling Person.call, we are calling the Person contructor, and passing the new object.
    Person.call(this);
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();