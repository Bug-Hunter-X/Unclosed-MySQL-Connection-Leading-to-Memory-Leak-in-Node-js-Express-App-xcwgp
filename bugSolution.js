const express = require('express');
const mysql = require('mysql');
const app = express();
app.get('/', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
  });
  connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      res.status(500).send('Database connection error');
      return;
    }
    console.log('connected as id ' + connection.threadId);
    res.send('Hello World!');
    connection.end((err) => {
      if (err) {
        console.error('error disconnecting: ' + err.stack);
      } else {
        console.log('Connection closed');
      }
    });
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});