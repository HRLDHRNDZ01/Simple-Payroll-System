const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'event_scheduler',
    password: '12345678',
    database: 'payroll'
});

connection.connect((err) =>{
    if (err){
        console.error('Error connecting to MySQL database: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.use(express.json());

app.post('/login', (req, res) =>{
    const {username, password} =  req.body;

    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) =>{
        if (error) {
            console.error('Error executing MySQL query: ', error);
            res.status(500).json({ success: false,message: 'An error occured while processing request'});
            return;
        }

        if (results.length > 0){
            res.json({success: true, message: 'Login Successful'});
        } else {
            res.status(401).json({success: false, message: 'Invalid username or password'})
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>{
    console.log('Server is running on port ${PORT}');
});