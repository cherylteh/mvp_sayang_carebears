require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "sayang",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

    let sql = "DROP TABLE if exists songlib; CREATE TABLE songlib (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(100) not null, composer VARCHAR(100), parts VARCHAR(30), PRIMARY KEY (id)); DROP TABLE if exists event; CREATE TABLE event (id INT NOT NULL AUTO_INCREMENT, eventName VARCHAR(100) not null, location VARCHAR(100), date DATE, PRIMARY KEY (id));";
  
  
    con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `students` was successful!");

    console.log("Closing...");
  }); */

  con.end();
});
