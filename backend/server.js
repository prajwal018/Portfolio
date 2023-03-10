const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();
const mysql = require('mysql2');

// create database connection

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Starboylover@1',
	database: 'cruddatabase',
});

//verifying connection to mysql database
connection.connect((error) => {
	if (error) {
		console.log('Error connecting to MySQL:', error);
	} else {
		console.log('Connected to MySQL successfully');
	}
});

// Use bodyParser middleware to parse JSON body of POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to handle POST request
app.post('/contact', (req, res) => {
	const { name, email, message } = req.body;

	//creating sql query to be passed to database
	const sql = 'INSERT INTO reviews (name, email, message) VALUES (?, ?, ?)';
	connection.query(sql, [name, email, message], (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).send({ message: 'Error submitting comment' });
		} else {
			console.log(results);
			res.status(200).send({ message: 'Comment submitted successfully' });
		}
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
