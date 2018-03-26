// breaks the original object reference
exports = function() {
    console.log('hello');
}

console.log(exports);
console.log(module.exports);