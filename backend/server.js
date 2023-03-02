const express = require('express');
const app = express();

// Route to handle POST requests to /api/send-email
app.get('/contact', (req, res) => {
	// Logic to send email using data from request body
	res.send('Email sent successfully!');
});
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Start the server and listen for incoming requests on port 5000
app.listen(5000, () => {
	console.log('Server is listening on port 5000...');
});
