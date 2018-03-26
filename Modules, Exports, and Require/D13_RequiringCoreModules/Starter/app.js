var util = require('util');

var name = "SF";
var greeting = util.format('hello, %s', name);
util.log(greeting);