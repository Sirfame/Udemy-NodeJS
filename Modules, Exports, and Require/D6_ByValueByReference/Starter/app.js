// pass by value
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

// pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
// this will overwrite the existing prop1 because they are referencing the same object in memory.
changeObj(c);
console.log(c);