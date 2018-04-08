var http = require('http');

// takes a callback which happens to be an event listener which is created by the event emitter. 
// listens for a specific event: request property, 
// We use quotes for the headers because some names are not valid in JS
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Hello world!\n');
}).listen(1337, '127.0.0.1');

// 127.0.0.1 is the standard internal IP address for the local system (localhost).