// First module, first set of JS code designed to be independent of other code, yet working in tandem with it, something I can reuse
// and reference in other node programs, and is a way to keep code structured and easy to manage as it grows.
// Code inside the module is protected, app.js cannot access the code unless specifically stated
var greet = function() {
    console.log("Hello module");
};

// When the module is called, the following line will give back whatever is included in the export
module.exports = greet;