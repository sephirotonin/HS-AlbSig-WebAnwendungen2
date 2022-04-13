var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let todoItemStore = [];

// Gibt Liste aller TodoItem zurück
app.get("/todo-items/", (req, res) => {
    res.send(todoItemStore);
});

// Neues todo item hinzufügen
app.post("/todo-items/", (req, res) => {
    var todoItem = req.body;

    todoItemStore.push(todoItem);

    res.status(200).send();
});

// Lösche ein todo item
app.delete("/todo-items/:todoItemId", (req, res) => {
    var todoItemIdToDelete = req.params.todoItemIdd;

    res.send("Lösche TodoItem mit Id " + todoItemIdToDelete);

});


module.exports = app;
