var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

// going to make endpoints
// body parser is middleware, it will take a look at the HTTP request for us before we handle whatever we are going to handle.
module.exports = function(app) {
    // middleware
    // body parser will parse out JSON out of the http request body
    app.use(bodyParser.json());
    // and we will make sure to use body parser to handle url encoded data (where certain characters are encoded as special characters like spaces)
    app.use(bodyParser.urlencoded( { extended: true }));

    // we get the :uname variable with request.params in the call back func
    app.get('/api/todos/:uname', function(req, res) {
        // .find on mongoose model has an error first callback.
        Todos.find({ username: req.params.uname }, function(err, todos) {
            if(err) {
                throw err;
            }
            res.send(todos);
        });
    });

    app.get('/api/todo/:id', function(req, res) {
        Todos.findById({ _id: req.params.id }, function(err, todo) {
            if(err) {
                throw err;
            }
            res.send(todo);
        })
    })

    app.post('/api/todo', function(req, res) {

        // req.body is given by body parser, and adds it to the request as a javascript object. On this object, if there is an id, then we know that 
        // this is an update.
        if(req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo, 
                isDone: req.body.isDone, 
                hasAttachment: req.body.hasAttachment
            }, function(err, todo) {
                if(err) {
                    throw err;
                }
                res.send('update successful')
            });
        } else {
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function(err) {
                if(err) throw err;
                res.send('save successful');
            });
        }
    });

    app.delete('/api/todo', function(req, res) {
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if(err) throw err;
            res.send('delete successful');
        })
    });

}