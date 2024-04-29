const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'event_scheduler',
    password: '12345678',
    database: 'payroll'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.use(express.json());

app.post('/signup', (req, res) => {
    const { firstname, lastname, username, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    connection.query('INSERT INTO users (firstname, lastname, username, email, password) VALUES (?, ?, ?, ?, ?)', [firstname, lastname, username, email, password], (error) => {
        if (error) {
            console.error('Error executing MySQL query: ', error);
            return res.status(500).json({ success: false, message: 'An error occurred while processing the request' });
        }

        res.status(201).json({ success: true, message: 'Signup successful' });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
