var buffer = new ArrayBuffer(8) // 8 bytes - 64 bits of raw binary. Not coming from node, comes from V8.

// Ff we change things in array, we change it in the buffer. We also read it from the buffer
// 32 here the numbers are stored in 32 bits, but that means we can only store 2 numbers since our
// buffer can only store 64 bits total.
// Lets us use the buffer in an easier way.
// Node will use its own views to deal with binary data.
// ES6 will have ways to deal with raw binary data.
var view = new Int32Array(buffer); // simply a way to deal with binary data in the buffer.
view[0] = 5;
view[1] = 10;
view[2] = 340;
console.log(view);