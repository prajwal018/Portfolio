const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Use bodyParser middleware to parse JSON body of POST request
app.use(bodyParser.json());

// Define a route to handle POST request
app.post('/contact', (req, res) => {
	const { name, email, message } = req.body;

	// Do something with the data received from the client
	console.log(`Received message from ${name} <${email}>: ${message}`);

	// Send a response back to the client
	res.send('Message received!');
});

// Start the server
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
