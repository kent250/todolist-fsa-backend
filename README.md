## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation ](#installation)
- [API Endpoints ](#api-endpoints)

## Project Description

This Node.js API provides a robust foundation for building a feature-rich to-do list application. It offers a comprehensive set of functionalities to manage tasks, making it ideal for integration into a frontend application.

## Features

Task Creation: Add new tasks to your to-do list, specifying their name and due dates.
Task Retrieval: Retrieve all tasks as well as their statuses(completed, Not Completed, Over due)
Task Management: Update task details name and due date, or mark tasks as completed/uncompleted.
Task Deletion: Remove unwanted tasks from your to-do list.


##  Prerequisites (Node.js, npm, MySQL)

Installation steps
Configuration for database connection
Documentation for all API endpoints with request/response details

Prerequisites

    - Node.js (version 20.14.0 or higher) - https://nodejs.org/en
    - npm (Node Package Manager) - (usually bundled with Node.js)
    - MySQL (version 8.0.30 or higher) - https://www.mysql.com/ (or alternative database management system)

## Installation

To get started with Todo List backend, follow these steps:

1. Clone the repository:

    - Using HTTPS:
        ```bash
        git clone https://github.com/kent250/todolist-fsa-backend.git
        cd todolist-fsa-backend
        ```

2. Install dependencies:
    ```bash
    npm install
    ```

## API Endpoints

 ### Create New Task

Method: POST
Route: /tasks
Request Body:

    task_name: String (required) - The name of the task.
    due_date: Date (Required) - The due date for the task.
    Response: Status code 200 OK upon successful creation of Task.

## Get All Tasks

Method: GET
Route: /tasks
Response: An array of JSON objects representing all tasks in the database. Each object contains properties id, task_name, due_date, and completed which is boolean value 1 for completed and 0 for not completed.

## Get Single Task

Method: GET
Route: /tasks/:id
Path Parameter:
    id: Integer (required) - The ID of the task to retrieve.
Response: A JSON object representing the single task with the specified ID.

## Delete Task

Method: DELETE
Route: /tasks/:id
Path Parameter:
    id: Integer (required) - The ID of the task to delete.
Response: Status code 204 (No Content) upon successful deletion.

## Mark Task Completed

Method: PUT
Route: /tasks/:taskId/completed
Path Parameter:
    taskId: Integer (required) - The ID of the task to mark completed.
Response: Status code 204 (No Content) upon successful update.

## Mark Task Uncompleted

Method: PUT
Route: /tasks/:taskId/uncompleted
Path Parameter:
    taskId: Integer (required) - The ID of the task to mark uncompleted.
Response: Status code 204 (No Content) upon successful update.

## Update Task Details

Method: PUT
Route: /tasks/:id
Path Parameter:
    id: Integer (required) - The ID of the task to update.
Request Body:
    task_name: String (optional) - The new name of the task.
    due_date: date(optinal) - The new Due Date of the task.























