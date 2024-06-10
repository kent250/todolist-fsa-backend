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

app.get('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const singleTaskQuery = `SELECT * FROM tasks WHERE id = ${id}`;

    connection.query(singleTaskQuery, (err, results) => {
        res.json(results[0]);
    });
});

app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id; // Access ID from request parameter
  
    const sql = `DELETE FROM tasks WHERE id = ${id}`;
  
    connection.query(sql, (err, result) => {
      res.sendStatus(204); // Send a successful response with no content
    });
  });


//   app.put('/tasks/:id', (req, res) => {
//     const id = req.params.id; // Access ID from request parameter
//     const { task_name } = req.body; // Assuming these fields are being updated
  
//     const sql = `UPDATE tasks SET task_name = ? WHERE id = ?`;
//     const values = [task_name, id];
  
//     connection.query(sql, values, (err, result) => {
//       res.sendStatus(200); // Send a successful response
//     });
//   });

app.listen(port)


