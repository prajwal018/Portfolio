const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require('mysql');
const db = require('./db');

app.post('/api/contact', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;

	const sql = `INSERT INTO contacts (name, email, message) VALUES ('${name}', '${email}', '${message}')`;

	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
			res.status(500).send('Error saving data');
		} else {
			console.log('Data saved');
			res.status(200).send('Data saved');
		}
	});
});

app.listen(3001, () => {
	console.log('Server is running on port 3001');
});
