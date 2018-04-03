// converting string to binary data using unicode character set, and utf-8 encoding
var buffer = new Buffer('Hello', 'utf-8');
console.log(buffer)
console.log(buffer.toString())

// returns in JSON object, array data is base10 representation of the unicode numbers
console.log(buffer.toJSON())

// buffer behaves like an array
console.log(buffer[2])

// this overwrites the original string because the buffer is meant to have a finite amount
// of memory available. It will initialize with the size of the original string.
buffer.write('wosdfasdfasdf');
console.log(buffer)
console.log(buffer.toString())