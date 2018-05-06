var express = require('express');
var app = express();

// This will search for an environment variable set by the box the code is running from, or set it to 3000
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>')
});

app.get('/api', function(req, res) {
    // note: sending object literal syntax, not json
    res.json({
        firstname: 'john',
        lastname: 'doe'
    });
});

app.listen(port);