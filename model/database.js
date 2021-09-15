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

    let sql = "DROP TABLE if exists admin;\
    CREATE TABLE admin (userID INT NOT NULL AUTO_INCREMENT, username VARCHAR(20) NOT NULL, password VARCHAR(20) NOT NULL, email VARCHAR(50), PRIMARY KEY (userID));\
    DROP TABLE if exists Dependent;\
    CREATE TABLE Dependent (depID int NOT NULL AUTO_INCREMENT, dep_name varchar(255) NOT NULL, meds varchar(255), PRIMARY KEY(depID));\
    DROP TABLE if exists MedSup;\
    CREATE TABLE MedSup (medID int NOT NULL AUTO_INCREMENT, medName varchar(255), medType varchar(255), medCondition varchar(255), dosage varchar(255), frequency varchar(255), PRIMARY KEY(medID));";
  
  
    con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Tables creations successful:\
    `admin (userID, username, password, email)`, \
    `Dependent (depID, dep_name, meds)`,\
    `MedSup (medID, medName, medType, medCondition, dosage, frequency)`");

    console.log("Closing...");
  });

  con.end();
});
