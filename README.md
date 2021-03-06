# Sayang Dependent Care and Management - Final Team Project for CodeOp MYS03 Bootcamp
Sayang Dependent Care and Management, final team MVP Project for MYS03 by Team CareBears, consisting of cohort members Kris and Cheryl.

## Current Features
![ProjectSayang_CurrentFeatures_20210930](https://user-images.githubusercontent.com/86417917/136498711-0587f78e-a0ef-4826-be43-26fceaab46a7.jpg)

## Objective
- Build a database with Tables
- Build a React app
- show the connection between database and React app

## Setup

### Dependencies

- Run `npm install` in the project folder to install dependencies related to Express (the server).
- `cd client` and run `npm install` install dependencies related to React (the client).

### Database Prep

Create `.env` file in project directory and add

```
DB_NAME=sayang
DB_PASS=YOUR_PASSWORD
SUPER_SECRET=YOUR_SECRET_KEY

```
(replace `YOUR_PASSWORD` with your actual password and `YOUR_SECRET_KEY` with a key of your choosing.)

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

### Install Vanilla Boostrap

## Basic Requirements

### 1. Database Schema
![image](https://user-images.githubusercontent.com/86417917/136498355-84216890-9e60-4360-b830-4820b20ef742.png)

### 2. API route Plan
![API Route_20210930](https://user-images.githubusercontent.com/86417917/136498170-963d85aa-ac59-49a4-9149-05126e355063.png)

### 3. User Flow Chart Diagram
![image](https://user-images.githubusercontent.com/86417917/136498063-902bcb7b-7b48-4196-9a8d-d550521a5bf1.png)


_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp 03 in Malaysia._
