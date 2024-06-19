## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation ](#installation)
- [API Endpoints ](#api-endpoints)

## Project Description

This Node.js API provides a robust foundation for building a feature-rich to-do list application. It offers a comprehensive set of functionalities to manage tasks, making it ideal for integration into a frontend application.

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

This section details all available API endpoints for managing tasks in this to-do list application.

**General Notes:**

* All routes are relative to the API base URL.
* Adjust the base URL according to your development or deployment environment.
* Responses include status codes to indicate success or failure.


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
| `task_name`       | String   | No       | The new name of the task (optional).           |
| `due_date`        | Date     | No       | The new due date for the task (optional).       |

**Response:**

* Status code 200 (OK) upon successful update.



















