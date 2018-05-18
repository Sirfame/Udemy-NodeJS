angular.module('TestApp', []);

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc() {
    // this variable will now point to VM or view model for this particular screen
    this.message = 'Hello'

    this.people = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jane Doe'
        },
        {
            name: 'Jim Doe'
        }
    ]
}