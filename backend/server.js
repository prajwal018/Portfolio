const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

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

app.post(
	'/contact',
	[
		check('name').notEmpty().withMessage('Name is required'),
		check('email').isEmail().withMessage('Email is invalid'),
		check('message').notEmpty().withMessage('Message is required'),
	],
	(req, res) => {
		// handle form submission
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			// console.log({ errors: errors.array() });
			res.status(422).send({ message: 'Invalid Form Inputs' });
		} else {
			//creating sql query to be passed to database
			const { name, email, message } = req.body;
			const sql = 'INSERT INTO reviews (name, email, message) VALUES (?, ?, ?)';
			connection.query(sql, [name, email, message], (err, results) => {
				if (err) {
					// console.log(err);
					res.status(422).send({ message: 'Database Error' });
				} else {
					// console.log(results);
					res.status(200).send({ message: 'Comment submitted successfully' });
				}
			});
		}
	}
);

// Start the server
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
