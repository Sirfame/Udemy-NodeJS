// replacing exports as own object, by using the following function constructor
function Greeter() {
    // property of Greeter object
    this.greeting = 'Hello World!!!';
    // method of Greeter object
    this.greet = function() {
        console.log(this.greeting);
    }
}

// Because Node cache's the results of require, this line is only run once, and saves the object reference to the cache.
module.exports = new Greeter();