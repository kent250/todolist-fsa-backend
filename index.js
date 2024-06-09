const express = require('express'); //import express package
const mysql = require('mysql'); //import mysql package

const app = express(); // create express instance
const port = 3000; //port where API will listen to

//create connection object
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist_fsa'
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow requests from your Vue app origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allowed HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
    next();
});


app.get('/tasks', (req, res) => {
    const allTasksQuery = 'SELECT * FROM tasks';

    connection.query(allTasksQuery, (err, results) => {
        res.json(results);
    });
});

app.listen(port)


