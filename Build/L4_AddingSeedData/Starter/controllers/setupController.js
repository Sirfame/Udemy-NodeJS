var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
        // seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn node',
                isDone: false,
                hasAttachment: false
            }
        ];

        // the create function accepts an array, matches the schema, and takes an error first callback 
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
}