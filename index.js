const express = require('express'); //import express package
const mysql = require('mysql'); //import mysql package
const bodyParser = require('body-parser');

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

app.use(bodyParser.json());

//select all tasks
app.get('/tasks', (req, res) => {
    const allTasksQuery = 'SELECT * FROM tasks';

    connection.query(allTasksQuery, (err, results) => {
        res.json(results);
    });
});

  //Select Single task
app.get('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const singleTaskQuery = `SELECT * FROM tasks WHERE id = ${id}`;

    connection.query(singleTaskQuery, (err, results) => {
        res.json(results[0]);
    });
});
  //Delete task
    app.delete('/tasks/:id', (req, res) => {
        const id = req.params.id; // Access ID from request parameter
    
        const sql = `DELETE FROM tasks WHERE id = ${id}`;
    
        connection.query(sql, (err, result) => {
        res.sendStatus(204); // Send a successful response with no content
        });
    });

  //mark task completed
  app.put('/tasks/:taskId/completed', (req, res) => {
    const { taskId } = req.params;
  
    const taskCompletedQuery = `UPDATE tasks SET completed = ? WHERE id = ?`;
    const values = [true, parseInt(taskId)]; // Set completed to true
  
    connection.query(taskCompletedQuery, values, (err, result) => {
        res.sendStatus(204); // Send a successful response with no content
      
    });
  });

  //mark task uncomplete
  app.put('/tasks/:taskId/uncompleted', (req, res) =>{
    const taskId = req.params.taskId;

    const taskUncompletedQuery = `UPDATE tasks  SET completed = ? WHERE id = ? `;
    const values = [false, parseInt(taskId)];

    connection.query(taskUncompletedQuery, values, (err, result)=> {
        res.sendStatus(200);
    });
  });

  //Create new Task
  app.post('/tasks', (req, res) => {
    const { task_name, due_date } = req.body;

    const newTaskQuery = `INSERT INTO tasks(task_name, due_date) VALUES (?, ?)`;
    const values = [task_name, due_date];

    connection.query(newTaskQuery, values, (error, result)=>{
        res.sendStatus(204);
    });
  });




app.listen(port)


