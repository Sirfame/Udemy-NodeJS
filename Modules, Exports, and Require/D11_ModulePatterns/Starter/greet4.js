// replacing exports as own object, by using the following function constructor
function Greeter() {
    // property of Greeter object
    this.greeting = 'Hello World!!!!';
    // method of Greeter object
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greeter;