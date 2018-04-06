function greet(callback) {
    console.log("hello");
    var data = {
        name: 'SF'
    };
    callback(data);
}

greet(function(data) {
    console.log("The callback was invoked");
    console.log(data)
});

greet(function(data) {
    console.log("Another callback");
    console.log(data.name)
});