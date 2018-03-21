// Your Javascript Code Goes Here
var person = {
    firstname: 'sf',
    lastname: 'lin',
    greet: function() {
        console.log('hello ' + this.firstname + ' ' + this.lastname);
    }
};

person.greet();
// Pass in string of the name of the name/value pair
console.log(person['firstname']);