var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// this is middleware
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	var con = mysql.createConnection({
		host: "localhost",
		user: "test",
		password: "test",
		database: "addressbook"
	});

	con.query('SELECT * FROM People', function(err, rows) {
		if(err) {
			throw err;
		}
		// returns JS object
		console.log(rows[0].Firstname)
	})

	next();
});

htmlController(app);

apiController(app);

app.listen(port);