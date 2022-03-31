// This is the routes.js file!

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const os = require('os');

const connection = mysql.createPool({
  host     : 'db-mysql-tor1-49002-do-user-11126549-0.b.db.ondigitalocean.com',
  user     : 'neverovertime',
  password : 'uTum7JvPVEwslIsA',
  database : 'neverovertime',
  port: 25060,
  insecureAuth:true
});

// Starting our app.
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({type: 'application/json'}))

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
    if (err) throw err;
    // Executing the MySQL query (select all data from the 'users' table).
    var sqlQuery = 'SELECT * FROM users';
    connection.query(sqlQuery, function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});
app.post('/api/user/login', function (req, res) {
//    console.log('req.body');
//    console.log(req.body);
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
    if (err) throw err;

    var sqlQuery = 'SELECT * from users WHERE username=? and password=? LIMIT 1';
    connection.query(sqlQuery,[req.body.username, req.body.password], function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      res.send(results);
    });
  });
});
app.post('/api/user/updatebalance', function (req, res) {
//    console.log('req.body');
//    console.log(req.body);
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
    if (err) throw err;

    var sqlQuery = 'UPDATE users SET balance=? WHERE id=?';
    connection.query(sqlQuery,[req.body.newbalance,req.body.userid], function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      if(results.length != 0){
        res.send(true);
      }else{
        res.send(false);
      }
    });
  });
});
app.post('/api/user/signup', function (req, res) {
    console.log('req.body');
    console.log(req.body);
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
    // Check if a user exist
    var sqlQueryCheck = 'SELECT * from users WHERE username=? LIMIT 1';
    connection.query(sqlQueryCheck,[req.body.username], function (error, results, fields) {
          // If some error occurs, we throw an error.
          if (error) throw error;
          if(results.length != 0){
            res.send(false);
          }else{
          var sqlQuery = 'INSERT INTO users (username, password, email) Values(?, ?, ?)';
              connection.query(sqlQuery,[req.body.username, req.body.password, req.body.email], function (error, results, fields) {
                // If some error occurs, we throw an error.
                if (error) throw error;
                  res.send(true);
              });

          }
        });

  });
});


app.post('/api/user/search', function (req, res) {
    console.log('req.body');
    console.log(req.body);
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
    if (err) throw err;

    var sqlQuery = 'SELECT Id from users WHERE username=? LIMIT 1';
    connection.query(sqlQuery,[req.body.username], function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      if(results.length == 0){
        res.send('-1');
      }else{
        res.send(results[0]['Id'].toString());
      }
    });
  });
});

app.get('/api/user', function (req, res) {
    console.log('req.query');
    console.log(req.query);
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
    if (err) throw err;

    var sqlQuery = 'SELECT Username, Email, Balance from users WHERE Id=? LIMIT 1';
    connection.query(sqlQuery,[req.query.id], function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      if(results.length == 0){
        res.send('{}');
      }else{
        res.send(results[0]);
      }
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
 var networkInterfaces = os.networkInterfaces();
 console.log('The one starts with 192.168...... is your local ip address');
 console.log(networkInterfaces["en0"]);
});
