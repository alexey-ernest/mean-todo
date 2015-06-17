var express = require('express');
var router = express.Router();
var Todo = require('../../lib/todo');

router.get('/', function (req, res, next) {
    Todo.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

router.get('/:todo_id', function (req, res, next) {
    Todo.findById(req.params.todo_id, function (err, todo) {
        if (err) return next(err);
        res.json(todo);
    });
});

router.post('/', function (req, res, next) {
    Todo.create({
        text: req.body.text,
        done: false
    }, function (err, todo) {
        if (err) return next(err);
        res.status(201).json(todo);
    });
});

router.put('/:todo_id', function (req, res, next) {
    Todo.findOneAndUpdate(
        { _id: req.params.todo_id }, 
        { text: req.body.text },
        { new: true },
        function (err, todo) {
            if (err) return next(err);
            res.json(todo);
        }
    );
});

router.delete('/:todo_id', function (req, res, next) {
    Todo.remove({
        _id: req.params.todo_id
    }, function (err) {
        if (err) return next(err);
        res.status(200);
    })
});

module.exports = router;
