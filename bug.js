const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause a memory leak if the connection is never closed
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
  });
  connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});