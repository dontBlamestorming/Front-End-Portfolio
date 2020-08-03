const fs = require("fs");
const data = fs.readFileSync("./database.json");

const conf = JSON.parse(data);
console.log(conf); // check what database use

const mysql = require("mysql"); // have to 'npm install --save mysql'

const db = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

module.exports = db;
