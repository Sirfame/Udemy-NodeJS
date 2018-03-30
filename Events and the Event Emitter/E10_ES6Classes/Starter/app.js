'use strict';

// Constructor - creator of objects
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log('hello, ' + this.firstname + ' ' + this.lastname);
    }

 }

var sf = new Person('sf', 'lin');
var vs = new Person('vs', 'duan');
console.log(sf);
console.log(vs);
sf.greet();
vs.greet();

console.log(sf.__proto__ === vs.__proto__);