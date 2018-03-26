// Your Javascript Code Goes Here
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

// this prototype is not the prototype of person, but it is the prototype of the objects created from Person, which is a function constructor
Person.prototype.greet = function() {
    //using the keyword this here makes sure that we are talking about the object, not some variable
    console.log('hello, ' + this.firstname + ' ' + this.lastname);
}

// automatically return the object when using the new keyword
var sf = new Person('sf', 'lin');
var vs = new Person('vs', 'duan');
console.log(sf);
console.log(vs);
sf.greet();
vs.greet();

// can see what the proto object is
// the javascript engine searches down the prototype chain to allow any objects created from the function constructor to have access to the same
// inherit the properties and methods that any of the prototypes have down the prototype chain
// if this prototype had its own prototypes, then the person object here would also have acces to those properties and methods
console.log(sf.__proto__ === vs.__proto__);