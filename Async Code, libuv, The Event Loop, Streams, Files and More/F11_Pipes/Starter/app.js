var fs = require('fs');
var zlib = require('zlib');


var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greetcopy.txt.gz');

// simply giving a compressed output, gzip is both readable and writeable, so we can write to the writeable stream
var gzip = zlib.createGzip();

// sets up the event listener to listen for the chunk of data, then returns the writeable stream.
// if the parameter was a duplex listener (read and write), we can call pipe on the destination again.
readable.pipe(writable);

// stream to stream to stream
// this pattern is called method chaining.
// gzip is not a file stream, it was a stream that did a particular job, in this case, compress
readable.pipe(gzip).pipe(compressed);