const express = require('express');
const server = express();
// const MongoClient = require('mongodb').MongoClient;

// Konfigurera webbservern:
// middleware
// routes
// error handling
// starta servern

// build-mappen
server.get('/test', (request, response) => {
	console.log('Received GET request to /test');
	response.send('Testing!');
})
const port = process.env.PORT || 1337;
server.listen(port, () => {
	console.log('Server listening on port ' + port);
})
