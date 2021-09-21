# mvp_sayang_carebears
Sayang for Caregivers, final MVP Project for MYS03 by Team CareBears, consisting for Kris and Cheryl.

## Objective
- Build a database with Tables
- Build a React app
- show the connection between database and React app

## Setup

### Dependencies

- Run `npm install` in the project folder to install dependencies related to Express (the server).
- Run `npm install jsonwebtoken bcrypt` in the project folder to install dependencies related to Json Web Token.
- `cd client` and run `npm install` install dependencies related to React (the client).

### Database Prep

Create `.env` file in project directory and add

```
DB_NAME=sayang
DB_PASS=YOUR_PASSWORD
```
(replace `YOUR_PASSWORD` with your actual password)

Alternatively, you can rename the provided `.env.example` file to `.env`.

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `create database sayang;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Run `node model/database.js` in your **TERMINAL**, in the **project** folder (not your MySQL CLI! Open a new terminal window for this). This will create a table called 'items' in your database.

### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 5000
- `cd client` and run `npm start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000`

### Installing Vanilla Boostrap

## Basic Requirement

### 1. Database Schema
to add
### 2. API route Plan
to add

### 3. User Flow Chart Diagram
to add

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp 03 in Malaysia._