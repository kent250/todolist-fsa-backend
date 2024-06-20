## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation ](#installation)
- [API Endpoints ](#api-endpoints)
- [CORS Settings ](#cors-settings)

## Project Description

This is a Backend APIs that provides Basic functionalities of a ToDo list application that can be integrated 
with front-end applications. It is built using Node.js, Express.js, MYSQl database

## Features

- Task Creation: Add new tasks to your to-do list, specifying their name and due dates.
- Task Retrieval: Retrieve all tasks as well as their statuses(completed, Not Completed, Over due)
- Task Management: Update task details name and due date, or mark tasks as completed/uncompleted.
- Task Deletion: Remove unwanted tasks from your to-do list.


##  Prerequisites (Node.js, npm, MySQL)

Installation steps
Configuration for database connection
Documentation for all API endpoints with request/response details

Prerequisites

    - Node.js (version 20.14.0 or higher) - https://nodejs.org/en
    - npm (Node Package Manager) - (usually bundled with Node.js)
    - XAMPP (version 8.2.X or higher): Download and install from https://www.apachefriends.org/

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


3. Install And Run XAMPP Server For Database

- Run XAMPP Installer: Locate the downloaded XAMPP installer and run it.
- Choose Installation Options: During installation, ensure you select "Apache", "MySQL" and "PHP" components. You can deselect other components if not needed.
- Start Apache and MySQL Services: Open the XAMPP Control Panel and click the "Start" button next to both "Apache" and "MySQL" modules.

4. Database Import:

- Create a Database: Open your web browser and navigate to http://localhost/phpmyadmin.
- Create New Database: Click on "New" in the top navigation bar. Enter a **todolist_fsa**  as database name Create.
- Import Database File: with todolist_fsa database Selected click on the "Import" tab in phpMyAdmin. Select the database file called **todolist_fsa.sql** file from your project root and click "Go" to import it.

5. Running the API

- Start the Server: Open a terminal window in the project directory and run the following command:
    ```bash
    node index.js
    ```

## API Endpoints

This section details all available API endpoints for managing tasks in this to-do list application.

**General Notes:**

* The API is currently deployed at https://todolist-fsa-backend.onrender.com
* Responses include status codes to indicate success.


 ### Create New Task

**Method:** POST
**Route:** `/tasks`

**Request Body:**

| Property        | Type     | Required | Description                                      |
|------------------|----------|-----------|--------------------------------------------------|
| `task_name`       | String   | Yes      | The name of the task.                          |
| `due_date`        | Date     | Yes      | The due date for the task.           |

**Response:**

* Status code 200 (OK) upon successful creation of a task.

---

## Get All Tasks

**Method:** GET
**Route:** `/tasks`

**Response:**

* Status code 200 (OK) with a JSON array containing all tasks in the database. Each object represents a task with properties like `id`, `task_name`, `due_date`, and `completed`.

---

## Get Single Task

**Method:** GET
**Route:** `/tasks/:id`

**Path Parameter:**

| Parameter | Type     | Required | Description                                  |
|-----------|----------|-----------|----------------------------------------------|
| `id`       | Integer  | Yes      | The ID of the task to retrieve.             |

**Response:**

* Status code 200 (OK) with a JSON object representing the single task with the specified ID.

---

## Delete Task

**Method:** DELETE
**Route:** `/tasks/:id`

**Path Parameter:**

| Parameter | Type     | Required | Description                                  |
|-----------|----------|-----------|----------------------------------------------|
| `id`       | Integer  | Yes      | The ID of the task to delete.                 |

**Response:**

* Status code 204 (No Content) upon successful deletion.

---
## Mark Task Completed

**Method:** PUT
**Route:** `/tasks/:taskId/completed`

**Path Parameter:**

| Parameter | Type     | Required | Description                                  |
|-----------|----------|-----------|----------------------------------------------|
| `taskId`   | Integer  | Yes      | The ID of the task to mark completed.         |

**Response:**

* Status code 204 (No content) upon successful update.

---

## Mark Task Uncompleted

**Method:** PUT
**Route:** `/tasks/:taskId/uncompleted`

**Path Parameter:**

| Parameter | Type     | Required | Description                                  |
|-----------|----------|-----------|----------------------------------------------|
| `taskId`   | Integer  | Yes      | The ID of the task to mark uncompleted.        |

**Response:**

* Status code 204 (No content) upon successful update.

---
## Update Task Details

**Method:** PUT
**Route:** `/tasks/:id`

**Path Parameter:**

| Parameter | Type     | Required | Description                                  |
|-----------|----------|-----------|----------------------------------------------|
| `id`       | Integer  | Yes      | The ID of the task to update.                 |

**Request Body:**

| Property        | Type     | Required | Description                                      |
|------------------|----------|-----------|--------------------------------------------------|
| `task_name`       | String   | No       | The new name of the task.           |
| `due_date`        | Date     | No       | The new due date for the task.       |

**Response:**

* Status code 200 (OK) upon successful update.

## CORS Settings
In index.js remember to change this block of code to match the frontend that will be consuming the API

```
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow requests from your Vue app origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allowed HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
    next();
});

```
















