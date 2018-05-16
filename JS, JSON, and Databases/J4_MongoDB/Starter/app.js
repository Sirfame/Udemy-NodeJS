var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://sf:sf@ds023490.mlab.com:23490/addressbook-sf', function(err, db) {
	if(err) {
		console.log(err);
	} else {
		console.log('Connected to server');
	}
});

var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
	firstname: 'John',
	lastname: 'Doe',
	address: '555 Main St.'
});

john.save(function(err) {
	if(err) throw err;
	console.log('person saved');
});

var jane = Person({
	firstname: 'Jane',
	lastname: 'Doe',
	address: '555 Main St.'
});

jane.save(function(err) {
	if(err) throw err;
	console.log('person saved');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	Person.find({}, function(err, users) {
		if(err) throw err;

		console.log(users);
	})
	next();
});

htmlController(app);

apiController(app);

app.listen(port);